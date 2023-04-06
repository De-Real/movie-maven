import CommentController from "./CommentController";
import { StyledComments } from "./styles/Comments.styled";
import { useAppSelector } from "../../../../store/hooks";
import { selectComments } from "../../../../store/comments-slice";

const Comments = () => {
	//Here we can copy comments to global state

	const comments = useAppSelector(selectComments);

	return (
		<StyledComments>
			<ul>
				{comments.map((comment) => {
					return (
						<CommentController key={comment.commentId} comment={comment} />
					);
				})}
			</ul>
		</StyledComments>
	);
};

export default Comments;
