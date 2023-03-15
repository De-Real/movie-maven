import React from "react";
import { MoviesList, MoviesSort } from "../features/movies";
import { StyledMovies } from "./styles/Movies.styled";

const DUMMY_MOVIES = [
	{ id: "1", title: "Hello wordly! 1" },
	{ id: "2", title: "Hello wordly! 2" },
	{ id: "3", title: "Hello wordly! 3" },
	{ id: "4", title: "Hello wordly! 4" },
	{ id: "5", title: "Hello wordly! 5" },
	{ id: "6", title: "Hello wordly! 6" },
	{ id: "7", title: "Hello wordly! 7" },
	{ id: "8", title: "Hello wordly! 8" },
	{ id: "9", title: "Hello wordly! 9" },
	{ id: "10", title: "Hello wordly! 10" },
	{ id: "11", title: "Hello wordly! 11" },
	{ id: "12", title: "Hello wordly! 12" },
];

const Movies = () => {
	return (
		<>
			<MoviesSort />
			<h3> Movies </h3>
			<MoviesList movies={DUMMY_MOVIES} />
		</>
	);
};

export default Movies;
