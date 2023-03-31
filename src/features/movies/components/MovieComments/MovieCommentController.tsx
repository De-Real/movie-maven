import React, { useState } from "react";
import CommentForm from "../form/CommentForm";
import MovieComment from "./MovieComment";
import {
	MovieCommentControllerAnswers,
	StyledMovieCommentController,
} from "./styles/MovieCommentController.styled";
import { CommentResponseBody } from "../../types/comments";

import { CommentBody, MainCommentBody } from "../../../../types/comments";
import { useAppDispatch } from "../../../../store/hooks";
import commentsSlice, {
	addAnswerComment,
} from "../../../../store/comments-slice";

type MovieCommentProps = {
	comment: MainCommentBody;
};

const MovieCommentController = ({ comment }: MovieCommentProps) => {
	const { answers } = comment;

	const [isResponsing, setIsResponsing] = useState(false);

	const dispatch = useAppDispatch();

	const submitResponseHandler = (body: CommentResponseBody) => {
		const commentAnswerBody: CommentBody = {
			commentText: body.commentText,
			commentId: String(Math.random()), //Should form normal id
			userId: "1321321341", //Should be taken from global state
			userName: body.anonymous ? "Anonymous" : "real", //Should be taken from global state
			userRating: 4.5, //Should be taken from films details
			date: new Date().toLocaleDateString(),
		};

		console.log(commentAnswerBody);

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
		<StyledMovieCommentController>
			<MovieComment
				comment={comment}
				onManageResponse={manageResponseHandler}
			/>

			<MovieCommentControllerAnswers>
				{answers.map((answer) => (
					<MovieComment key={answer.commentId} comment={answer} answer />
				))}
				{isResponsing && (
					<CommentForm
						answer
						onManageResponse={manageResponseHandler}
						onSubmitResponse={submitResponseHandler}
					/>
				)}
			</MovieCommentControllerAnswers>
		</StyledMovieCommentController>
	);
};

export default MovieCommentController;
