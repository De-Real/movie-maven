import React from "react";
import Grid from "@mui/material/Grid";
import { StyledMoviesCollection } from "./styles/MoviesCollectionItem.styled";
import { Link } from "react-router-dom";

type MoviesCollectionItemProps = {
	collection: { title: string; movies: number; picture: string };
};

const MoviesCollectionItem = ({ collection }: MoviesCollectionItemProps) => {
	return (
		<Grid item xs={12} sm={6} md={6} lg={3} xl={2.4}>
			<Link to="/movies/collections/id">
				<StyledMoviesCollection>
					<p>{collection.movies}</p>
					<img src={collection.picture} alt={collection.title} />
					<h4>{collection.title}</h4>
				</StyledMoviesCollection>
			</Link>
		</Grid>
	);
};

export default MoviesCollectionItem;
