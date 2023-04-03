import { useState } from "react";
import CommentForm from "../form/CommentForm";
import MovieComment from "./MovieComment";
import {
	MovieCommentControllerAnswers,
	StyledMovieCommentController,
} from "./styles/MovieCommentController.styled";
import { CommentResponseBody } from "../../types/comments";

import { CommentBody, MainCommentBody } from "../../../../types/comments";
import { useAppDispatch } from "../../../../store/hooks";
import { addAnswerComment } from "../../../../store/comments-slice";
import Alert from "../../../../components/ui/Alert";
import { formCommentAnswerBody } from "../../utils/formCommentAnswerBody";
import { AnimatePresence } from "framer-motion";

type MovieCommentProps = {
	comment: MainCommentBody;
};

const MovieCommentController = ({ comment }: MovieCommentProps) => {
	const { answers } = comment;

	const [isResponsing, setIsResponsing] = useState(false);
	const [openSuccess, setOpenSuccess] = useState(false);

	const dispatch = useAppDispatch();

	const handleAlertOpen = () => {
		setOpenSuccess(true);
	};

	const handleAlertClose = (
		_event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason !== "clickaway") {
			setOpenSuccess(false);
		}
	};

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
		setIsResponsing(false);
	};

	const manageResponseHandler = () => {
		setIsResponsing((prevState) => !prevState);
	};

	return (
		<>
			<Alert
				title="Your answer was added!"
				handleClose={handleAlertClose}
				open={openSuccess}
			/>
			<StyledMovieCommentController>
				<MovieComment
					comment={comment}
					onManageResponse={manageResponseHandler}
				/>

				<MovieCommentControllerAnswers>
					{answers.map((answer) => (
						<MovieComment key={answer.commentId} comment={answer} answer />
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
				</MovieCommentControllerAnswers>
			</StyledMovieCommentController>
		</>
	);
};

export default MovieCommentController;
