import { useState, useEffect } from "react";
import {
	MovieCommentButton,
	MovieCommentControl,
	MovieCommentHeader,
	MovieCommentReport,
	MovieCommentText,
	StyledMovieComment,
} from "./styles/MovieComment.styled";
import Rating from "@mui/material/Rating";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FadeTooltip from "../../../../components/ui/FadeTooltip";

import { CommentBody } from "../../../../types/comments";
import { useAppDispatch } from "../../../../store/hooks";
import { manageCommentLike } from "../../../../store/comments-slice";

type MovieCommentProps = {
	comment: CommentBody;
	answer?: boolean;
	onManageResponse?: () => void;
};

const commentVariants = {
	hidden: { x: "100vw", opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 1, type: "spring" } },
};

const MovieComment = ({
	comment,
	answer = false,
	onManageResponse,
}: MovieCommentProps) => {
	const dispatch = useAppDispatch();

	const [liked, setLiked] = useState(false);
	const [initial, setInitial] = useState(true);

	const manageResponsingHandler = () => {
		if (onManageResponse) {
			onManageResponse();
		}
	};

	useEffect(() => {
		if (initial) {
			setInitial(false);
		} else {
			dispatch(
				manageCommentLike({
					id: comment.commentId,
					action: liked ? "increment" : "decrement",
				})
			);
		}

		//Need to fix later, ESLinter make us put initial as dependency
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [liked, comment.commentId, dispatch]);

	const manageLikeHandler = () => {
		setLiked((currentState) => !currentState);
	};

	return (
		<>
			<StyledMovieComment
				variants={commentVariants}
				initial="hidden"
				animate="visible"
				isAnswer={answer}
			>
				<MovieCommentHeader>
					<p>{comment.userName}</p>
					<p>{comment.date}</p>
					<Rating
						defaultValue={comment.userRating}
						size="small"
						precision={0.1}
						readOnly
					/>
				</MovieCommentHeader>
				<MovieCommentText>{comment.commentText}</MovieCommentText>
				<MovieCommentControl>
					<FadeTooltip title="Agree with this comment">
						<MovieCommentButton onClick={manageLikeHandler}>
							{liked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
							<span> Agree ({comment.likes})</span>
						</MovieCommentButton>
					</FadeTooltip>
					{!answer && (
						<FadeTooltip title="Response to this comment">
							<MovieCommentButton onClick={manageResponsingHandler}>
								<KeyboardReturnIcon />
								<span>Response</span>
							</MovieCommentButton>
						</FadeTooltip>
					)}
				</MovieCommentControl>
				<FadeTooltip title="Report about problem">
					<MovieCommentReport>
						<ReportProblemIcon />
					</MovieCommentReport>
				</FadeTooltip>
			</StyledMovieComment>
		</>
	);
};

export default MovieComment;
