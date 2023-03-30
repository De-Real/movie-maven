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
import CommentForm from "../../../../components/form/CommentForm";

type commentType = {
	commentId: string;
	userId: string;
	userName: string;
	commentText: string;
	userRating: number;
	date: Date;
};

type MovieCommentProps = {
	comment: commentType;
	answer?: boolean;
};

const MovieComment = ({ comment, answer = false }: MovieCommentProps) => {
	const [liked, setLiked] = useState(false);
	const [isResponsing, setIsResponsing] = useState(false);

	return (
		<>
			<StyledMovieComment isAnswer={answer}>
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

					{!answer && (
						<button
							onClick={() => {
								setIsResponsing((s) => !s);
							}}
						>
							<KeyboardReturnIcon />
							<span>Response</span>
						</button>
					)}
				</MovieCommentControl>
				<MovieCommentReport>
					<ReportProblemIcon />
				</MovieCommentReport>
			</StyledMovieComment>
			{isResponsing && <CommentForm />}
		</>
	);
};

export default MovieComment;
