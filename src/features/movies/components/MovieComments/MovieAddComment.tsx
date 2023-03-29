import React from "react";
import CommentForm from "../../../../components/form/CommentForm";
import {
	StyledMovieAddComment,
	StyledNotation,
} from "./styles/MovieAddComment.styled";

const MovieAddComment = () => {
	return (
		<StyledMovieAddComment>
			<h5>Leave review comment to this movie.</h5>
			<StyledNotation>
				NOTE: Comments with spoilers, offensive language and non-related themes
				will be deleted.
			</StyledNotation>
			<CommentForm />
		</StyledMovieAddComment>
	);
};

export default MovieAddComment;
