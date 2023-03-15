import React from "react";
import MovieItem from "./MovieItem";
import Grid from "@mui/material/Grid";

import { StyledMoviesList } from "./styles/MoviesList.styled";

type MoviesListProps = {
	movies: { id: string; title: string }[];
};

const MoviesList = ({ movies }: MoviesListProps) => {
	return (
		<div>
			<Grid container spacing={2}>
				{movies.map((movie) => (
					<MovieItem key={movie.id} title={movie.title} />
				))}
			</Grid>
		</div>
	);
};

export default MoviesList;
