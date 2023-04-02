import {
	MovieDetailsBlock,
	MovieDetailsTop,
} from "./styles/MovieDetails.styled";

import MovieLeftTopDetails from "./MovieLeftTopDetails";
import MovieRightTopDetails from "./MovieRightTopDetails";
import MovieComments from "../MovieComments/MovieComments";
import MovieAddComment from "../MovieComments/MovieAddComment";

import { DUMMY_COMMENTS } from "../../data/dummy-comments";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { setComments } from "../../../../store/comments-slice";
import { DUMMY_MOVIES } from "../../data/dummy-related.movies";
import MoviesList from "../MoviesList";

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
				<h4>About movie</h4>
				<p>
					About movie Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Officiis, aspernatur fuga, temporibus nihil tempore alias soluta culpa
					nam eum impedit, minus ullam odio quas. Aperiam excepturi dignissimos
					a maxime! Ea.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
					beatae porro in ad consequuntur impedit
				</p>
			</MovieDetailsBlock>
			<MovieDetailsBlock>
				<h4>Seasons / related movies </h4>
				<p>
					Seasons/related movies Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nesciunt corrupti expedita sit laborum ut,
					excepturi, minus veniam blanditiis odio optio sapiente. Quia corporis
					explicabo vitae ab minus eos, harum earum?
				</p>
				<div>
					<MoviesList movies={DUMMY_MOVIES} type="short" />
				</div>
			</MovieDetailsBlock>
			<MovieDetailsBlock>
				<h4>Comments </h4>
				<MovieAddComment />
				<MovieComments />
			</MovieDetailsBlock>
		</div>
	);
};

export default MovieDetails;
