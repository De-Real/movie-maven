import CommentForm from "../form/CommentForm";
import Comment from "./Comment";
import {
	CommentControllerAnswers,
	StyledCommentController,
} from "./styles/CommentController.styled";
import { CommentResponseBody } from "../../types/comments";

import { CommentBody, MainCommentBody } from "../../../../types/comments";
import { useAppDispatch } from "../../../../store/hooks";
import { addAnswerComment } from "../../../../store/comments-slice";
import Alert from "../../../../components/ui/Alert";
import { formCommentAnswerBody } from "../../utils/formCommentAnswerBody";
import { AnimatePresence } from "framer-motion";
import useOpenAlert from "../../hooks/useOpenAlert";
import useCommentResponding from "../../hooks/useCommentResponding";

type CommentProps = {
	comment: MainCommentBody;
};

const CommentController = ({ comment }: CommentProps) => {
	const { answers } = comment;

	const { isResponsing, manageResponseHandler } = useCommentResponding();

	//Hook to manage alert
	const { isAlertOpen, handleAlertClose, handleAlertOpen } = useOpenAlert();

	const dispatch = useAppDispatch();

	const submitResponseHandler = (body: CommentResponseBody) => {
		handleAlertOpen();
		const commentAnswerBody: CommentBody = formCommentAnswerBody(body, {
			id: "12312321312", //info should be taken from global state
			name: "real", //info should be taken from global state
			rating: 4.5, //info should be taken from global state
		});

		dispatch(
			addAnswerComment({ headId: comment.commentId, body: commentAnswerBody })
		);

		//Here we should send response to the server and
		//update answers on current comment
		manageResponseHandler(false);
	};

	return (
		<>
			<Alert
				title="Your answer was added!"
				handleClose={handleAlertClose}
				open={isAlertOpen}
			/>
			<StyledCommentController>
				<Comment comment={comment} onManageResponse={manageResponseHandler} />

				<CommentControllerAnswers>
					{answers.map((answer) => (
						<Comment key={answer.commentId} comment={answer} answer />
					))}
					<AnimatePresence mode="wait">
						{isResponsing && (
							<CommentForm
								answer
								onManageResponse={manageResponseHandler}
								onSubmitResponse={submitResponseHandler}
							/>
						)}
					</AnimatePresence>
				</CommentControllerAnswers>
			</StyledCommentController>
		</>
	);
};

export default CommentController;
