import React from "react";
import MovieItem from "./MovieItem";
import Grid from "@mui/material/Grid";

type MoviesListProps = {
	movies: { id: string; title: string }[];
};

const MoviesList = ({ movies }: MoviesListProps) => {
	return (
		<Grid container spacing={2}>
			{movies.map((movie) => (
				<MovieItem key={movie.id} title={movie.title} />
			))}
		</Grid>
	);
};

export default MoviesList;
