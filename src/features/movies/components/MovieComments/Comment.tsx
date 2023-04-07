import {
	CommentHeader,
	CommentReport,
	CommentText,
	StyledComment,
} from "./styles/Comment.styled";
import Rating from "@mui/material/Rating";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import FadeTooltip from "../../../../components/ui/FadeTooltip";

import { CommentBody } from "../../../../types/comments";
import CommentControlBtns from "./CommentControlBtns";
import { commentVariants } from "./animations/comments";

type CommentProps = {
	comment: CommentBody;
	answer?: boolean;
	onManageResponse?: () => void;
};

const Comment = ({
	comment,
	answer = false,
	onManageResponse,
}: CommentProps) => {
	const manageResponsingHandler = () => {
		if (onManageResponse) {
			onManageResponse();
		}
	};

	return (
		<>
			<StyledComment
				variants={commentVariants}
				initial="hidden"
				animate="visible"
			>
				<CommentHeader>
					<p>{comment.userName}</p>
					<p>{comment.date}</p>
					<Rating
						defaultValue={comment.userRating}
						size="small"
						precision={0.1}
						readOnly
					/>
				</CommentHeader>
				<CommentText>{comment.commentText}</CommentText>
				<CommentControlBtns
					commentId={comment.commentId}
					commentLikes={comment.likes}
					answer={answer}
					onResponseManage={manageResponsingHandler}
				/>
				<FadeTooltip title="Report about problem">
					<CommentReport>
						<ReportProblemIcon />
					</CommentReport>
				</FadeTooltip>
			</StyledComment>
		</>
	);
};

export default Comment;
