import React from "react";
import { DUMMY_MOVIES } from "../../data/dummy-related.movies";
import MoviesList from "../MoviesList";

const MovieSeasons = () => {
	return (
		<>
			<h4>Seasons / related movies </h4>
			<p>
				Seasons/related movies Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Nesciunt corrupti expedita sit laborum ut, excepturi,
				minus veniam blanditiis odio optio sapiente. Quia corporis explicabo
				vitae ab minus eos, harum earum?
			</p>
			<div>
				<MoviesList movies={DUMMY_MOVIES} type="short" />
			</div>
		</>
	);
};

export default MovieSeasons;
