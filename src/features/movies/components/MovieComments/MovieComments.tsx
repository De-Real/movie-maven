import React from "react";
import MovieCommentController from "./MovieCommentController";
import { StyledMovieComments } from "./styles/MovieComments.styled";

const DUMMY_COMMENTS = [
	{
		commentId: "1",
		userId: "1",
		userName: "real",
		commentText: "It's quite nice detective! Waiting for the next season!",
		userRating: 4.9,
		date: new Date(),
		answers: [
			{
				commentId: "1_1",
				userId: "7",
				userName: "uma",
				commentText: "Yehh, I quite agree with this guy. Still waiting <3",
				userRating: 5,
				date: new Date(),
			},
			{
				commentId: "1_2",
				userId: "9",
				userName: "Anonymous",
				commentText: "Ahahaha, you are kidding guys??!?",
				userRating: 0.1,
				date: new Date(),
			},
		],
	},
	{
		commentId: "2",
		userId: "2",
		userName: "Mira Ki",
		commentText: "AWFUL!!!!",
		userRating: 1.0,
		date: new Date(),
		answers: [
			{
				commentId: "2_1",
				userId: "9",
				userName: "Anonymous",
				commentText: "EXACTLY",
				userRating: 0.1,
				date: new Date(),
			},
		],
	},
];

const MovieComments = () => {
	return (
		<StyledMovieComments>
			<ul>
				{DUMMY_COMMENTS.map((comment) => {
					return (
						<MovieCommentController key={comment.commentId} comment={comment} />
					);
				})}
			</ul>
		</StyledMovieComments>
	);
};

export default MovieComments;
