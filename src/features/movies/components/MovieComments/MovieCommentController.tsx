import React from "react";
import CommentForm from "../../../../components/form/CommentForm";
import MovieComment from "./MovieComment";
import {
	MovieCommentControllerAnswers,
	StyledMovieCommentController,
} from "./styles/MovieCommentController.styled";

type commentType = {
	commentId: string;
	userId: string;
	userName: string;
	commentText: string;
	userRating: number;
	date: Date;
};

type MovieCommentProps = {
	comment: commentType & { answers: commentType[] };
};

const MovieCommentController = ({ comment }: MovieCommentProps) => {
	const { answers } = comment;

	return (
		<StyledMovieCommentController>
			<MovieComment comment={comment} />

			<MovieCommentControllerAnswers>
				{answers.map((answer) => (
					<MovieComment key={comment.commentId} comment={answer} answer />
				))}
				<CommentForm answer />
			</MovieCommentControllerAnswers>
		</StyledMovieCommentController>
	);
};

export default MovieCommentController;
