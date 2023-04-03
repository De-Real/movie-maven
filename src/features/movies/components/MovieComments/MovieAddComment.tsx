import CommentForm from "../form/CommentForm";
import {
	StyledMovieAddComment,
	StyledNotation,
} from "./styles/MovieAddComment.styled";

import { CommentResponseBody } from "../../types/comments";
import { useAppDispatch } from "../../../../store/hooks";
import { MainCommentBody } from "../../../../types/comments";
import { addMainComment } from "../../../../store/comments-slice";
import { formCommentAnswerBody } from "../../utils/formCommentAnswerBody";
import { useState } from "react";
import Alert from "../../../../components/ui/Alert";

const MovieAddComment = () => {
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
				open={openSuccess}
			/>
			<StyledMovieAddComment>
				<h5>Leave review comment to this movie.</h5>
				<StyledNotation>
					NOTE: Comments with spoilers, offensive language and non-related
					themes will be deleted.
				</StyledNotation>
				<CommentForm onSubmitResponse={addComment} />
			</StyledMovieAddComment>
		</>
	);
};

export default MovieAddComment;
