import { useEffect, useState } from "react";
import {
	CommentButton,
	StyledCommentControlBtns,
} from "./styles/CommentBtnsControl.styled";
import FadeTooltip from "../../../../components/ui/FadeTooltip";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useAppDispatch } from "../../../../store/hooks";
import { manageCommentLike } from "../../../../store/comments-slice";
import useCommentLikes from "../../hooks/useCommentLikes";

type CommentControlBtnsProps = {
	commentId: string;
	commentLikes: number;
	answer: boolean;
	onResponseManage: () => void;
};

const CommentControlBtns = ({
	commentId,
	commentLikes,
	onResponseManage,
	answer,
}: CommentControlBtnsProps) => {
	const [initial, setInitial] = useState(true);
	const { isLiked, toggleLikesHandler } = useCommentLikes();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (initial) {
			setInitial(false);
		} else {
			dispatch(
				manageCommentLike({
					id: commentId,
					action: isLiked ? "increment" : "decrement",
				})
			);
		}

		//Need to fix later, ESLinter make us put initial as dependency
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLiked, commentId, dispatch]);

	return (
		<StyledCommentControlBtns>
			<FadeTooltip title="Agree with this comment">
				<CommentButton onClick={toggleLikesHandler}>
					{isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
					<span> Agree ({commentLikes})</span>
				</CommentButton>
			</FadeTooltip>
			{!answer && (
				<FadeTooltip title="Response to this comment">
					<CommentButton onClick={onResponseManage}>
						<KeyboardReturnIcon />
						<span>Response</span>
					</CommentButton>
				</FadeTooltip>
			)}
		</StyledCommentControlBtns>
	);
};

export default CommentControlBtns;
