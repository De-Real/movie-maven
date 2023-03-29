import React, { useState } from "react";
import {
	MovieCommentControl,
	MovieCommentHeader,
	MovieCommentReport,
	MovieCommentText,
	StyledMovieComment,
} from "./styles/MovieComment.styled";
import Rating from "@mui/material/Rating";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const MovieComment = ({
	comment,
}: {
	comment: {
		commentId: number;
		userId: number;
		userName: string;
		commentText: string;
		userRating: number;
		date: Date;
	};
}) => {
	const [liked, setLiked] = useState(false);

	return (
		<StyledMovieComment>
			<MovieCommentHeader>
				<p>{comment.userName}</p>
				<p>{comment.date.toLocaleDateString()}</p>
				<Rating
					defaultValue={comment.userRating}
					size="small"
					precision={0.1}
					readOnly
				/>
			</MovieCommentHeader>
			<MovieCommentText>{comment.commentText}</MovieCommentText>
			<MovieCommentControl>
				<button
					onClick={() => {
						setLiked((s) => !s);
					}}
				>
					{liked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
					<span> Agree (5)</span>
				</button>

				<button>
					<KeyboardReturnIcon />
					<span>Response</span>
				</button>
			</MovieCommentControl>
			<MovieCommentReport>
				<ReportProblemIcon />
			</MovieCommentReport>
		</StyledMovieComment>
	);
};

export default MovieComment;
