import React, { useState } from "react";
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

type MovieCommentProps = {
	comment: CommentBody;
	answer?: boolean;
	onResponseSubmit?: () => void;
	onManageResponse?: () => void;
};

const MovieComment = ({
	comment,
	answer = false,
	onManageResponse,
}: MovieCommentProps) => {
	const [liked, setLiked] = useState(false);

	const manageResponsingHandler = () => {
		if (onManageResponse) {
			onManageResponse();
		}
	};

	return (
		<>
			<StyledMovieComment isAnswer={answer}>
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
						<MovieCommentButton
							onClick={() => {
								setLiked((s) => !s);
							}}
						>
							{liked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
							<span> Agree (5)</span>
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
			{/* {isResponsing && <CommentForm />} */}
		</>
	);
};

export default MovieComment;
