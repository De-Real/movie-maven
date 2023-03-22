import React from "react";
import Grid from "@mui/material/Grid";
import MoviesCollectionItem from "./MoviesCollectionItem";

const DUMMY_COLLECTIONS = [
	{
		id: 1,
		title: "Best 2022 cartoons",
		movies: 8,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 2,
		title: "Best 1912 films",
		movies: 19,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 3,
		title: "Nigerian series",
		movies: 6,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 4,
		title: "Nigerian series",
		movies: 6,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 5,
		title: "Nigerian series",
		movies: 6,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 6,
		title: "Nigerian series",
		movies: 6,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 7,
		title: "Nigerian series",
		movies: 6,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 8,
		title: "Nigerian series",
		movies: 6,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
	{
		id: 9,
		title: "Nigerian series",
		movies: 6,
		picture:
			"https://thumbs.dreamstime.com/b/movie-slate-film-reel-wood-clapper-wooden-backgorund-36502412.jpg",
	},
];

const MoviesCollections = () => {
	return (
		<div>
			<h3> Collections of films, series and cartoons</h3>
			<Grid container spacing={1}>
				{DUMMY_COLLECTIONS.map((collection) => (
					<MoviesCollectionItem key={collection.id} collection={collection} />
				))}
			</Grid>
		</div>
	);
};

export default MoviesCollections;
