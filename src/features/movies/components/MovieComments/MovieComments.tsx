import MovieCommentController from "./MovieCommentController";
import { StyledMovieComments } from "./styles/MovieComments.styled";
import {useAppSelector } from "../../../../store/hooks";
import { selectComments } from "../../../../store/comments-slice";

const MovieComments = () => {
	//Here we can copy comments to global state

	const comments = useAppSelector(selectComments);

	return (
		<StyledMovieComments>
			<ul>
				{comments.map((comment) => {
					return (
						<MovieCommentController key={comment.commentId} comment={comment} />
					);
				})}
			</ul>
		</StyledMovieComments>
	);
};

export default MovieComments;
