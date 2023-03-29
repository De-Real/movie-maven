import React from "react";
import MovieComment from "./MovieComment";
import { StyledMovieComments } from "./styles/MovieComments.styled";

const DUMMY_COMMENTS = [
	{
		commentId: 1,
		userId: 1,
		userName: "real",
		commentText: "It's quite nice detective! Waiting for the next season!",
		userRating: 4.9,
		date: new Date(),
	},
	{
		commentId: 2,
		userId: 2,
		userName: "Mira Ki",
		commentText: "AWFUL!!!!",
		userRating: 1.0,
		date: new Date(),
	},
];

const MovieComments = () => {
	return (
		<StyledMovieComments>
			<ul>
				{DUMMY_COMMENTS.map((comment) => {
					return <MovieComment key={comment.commentId} comment={comment} />;
				})}
			</ul>
		</StyledMovieComments>
	);
};

export default MovieComments;
