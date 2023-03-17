import React from "react";
import MoviesItem from "./MoviesItem";
import Grid from "@mui/material/Grid";

type MoviesListProps = {
	movies: { id: string; title: string }[];
};

const MoviesList = ({ movies }: MoviesListProps) => {
	return (
		<Grid container spacing={2}>
			{movies.map((movie) => (
				<MoviesItem key={movie.id} title={movie.title} />
			))}
		</Grid>
	);
};

export default MoviesList;
