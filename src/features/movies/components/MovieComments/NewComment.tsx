import CommentForm from "../form/CommentForm";
import { StyledNewComment, StyledNotation } from "./styles/NewComment.styled";

import { CommentResponseBody } from "../../types/comments";
import { useAppDispatch } from "../../../../store/hooks";
import { MainCommentBody } from "../../../../types/comments";
import { addMainComment } from "../../../../store/comments-slice";
import { formCommentAnswerBody } from "../../utils/formCommentAnswerBody";
import Alert from "../../../../components/ui/Alert";
import useOpenAlert from "../../hooks/useOpenAlert";

const NewComment = () => {
	//Hook to manage alert
	const { isAlertOpen, handleAlertClose, handleAlertOpen } = useOpenAlert();
	const dispatch = useAppDispatch();

	const addComment = (body: CommentResponseBody) => {
		handleAlertOpen();
		const commentAnswerBody: MainCommentBody = {
			...formCommentAnswerBody(body, {
				id: "12312321312", //info should be taken from global state
				name: "real", //info should be taken from global state
				rating: 4.5, //info should be taken from global state
			}),
			answers: [],
		};

		dispatch(addMainComment(commentAnswerBody));
	};

	return (
		<>
			<Alert
				title="Your comment was added!"
				handleClose={handleAlertClose}
				open={isAlertOpen}
			/>
			<StyledNewComment>
				<h5>Leave review comment to this movie.</h5>
				<StyledNotation>
					NOTE: Comments with spoilers, offensive language and non-related
					themes will be deleted.
				</StyledNotation>
				<CommentForm onSubmitResponse={addComment} />
			</StyledNewComment>
		</>
	);
};

export default NewComment;
