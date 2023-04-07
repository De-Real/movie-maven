import {
	MovieDetailsBlock,
	MovieDetailsTop,
} from "./styles/MovieDetails.styled";

import MovieLeftTopDetails from "./MovieLeftTopDetails";
import MovieRightTopDetails from "./MovieRightTopDetails";

import { DUMMY_COMMENTS } from "../../data/dummy-comments";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { setComments } from "../../../../store/comments-slice";

import MovieAbout from "./MovieAbout";
import MovieSeasons from "./MovieSeasons";
import MovieComments from "./MovieComments";

const MovieDetails = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setComments(DUMMY_COMMENTS));
	});

	return (
		<div>
			<h3> Movie name </h3>

			<MovieDetailsTop>
				<MovieLeftTopDetails />
				<MovieRightTopDetails />
			</MovieDetailsTop>
			<MovieDetailsBlock>
				<MovieAbout />
			</MovieDetailsBlock>
			<MovieDetailsBlock>
				<MovieSeasons />
			</MovieDetailsBlock>
			<MovieDetailsBlock>
				<MovieComments />
			</MovieDetailsBlock>
		</div>
	);
};

export default MovieDetails;
