import React from "react";
import MoviesItem from "./MoviesItem";
import Grid from "@mui/material/Grid";
import { createMovieLink } from "../utils/createMovieLink";
import { Link } from "react-router-dom";

type MoviesListProps = {
	movies: {
		id: string;
		title: string;
		imgUrl: string;
		type: "films" | "series" | "cartoons";
	}[];
};

const MoviesList = ({ movies }: MoviesListProps) => {
	return (
		<Grid container spacing={2}>
			{movies.map((movie) => (
				<MoviesItem
					key={movie.id}
					title={movie.title}
					imgUrl={movie.imgUrl}
					type={movie.type}
					id={movie.id}
				/>
			))}
		</Grid>
	);
};

export default MoviesList;
