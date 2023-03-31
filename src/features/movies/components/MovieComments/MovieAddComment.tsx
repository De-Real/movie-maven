import React from "react";
import CommentForm from "../form/CommentForm";
import {
	StyledMovieAddComment,
	StyledNotation,
} from "./styles/MovieAddComment.styled";

import { CommentResponseBody } from "../../types/comments";
import { useAppDispatch } from "../../../../store/hooks";
import { MainCommentBody } from "../../../../types/comments";
import { addMainComment } from "../../../../store/comments-slice";

const MovieAddComment = () => {
	const dispatch = useAppDispatch();

	const addComment = (body: CommentResponseBody) => {
		const commentAnswerBody: MainCommentBody = {
			commentText: body.commentText,
			commentId: String(Math.random()), //Should form normal id
			userId: "1321321341", //Should be taken from global state
			userName: body.anonymous ? "Anonymous" : "real", //Should be taken from global state
			userRating: 4.5, //Should be taken from films details
			date: new Date().toLocaleDateString(),
			answers: [],
		};

		console.log(commentAnswerBody);

		dispatch(addMainComment(commentAnswerBody));
	};

	return (
		<StyledMovieAddComment>
			<h5>Leave review comment to this movie.</h5>
			<StyledNotation>
				NOTE: Comments with spoilers, offensive language and non-related themes
				will be deleted.
			</StyledNotation>
			<CommentForm onSubmitResponse={addComment} />
		</StyledMovieAddComment>
	);
};

export default MovieAddComment;
