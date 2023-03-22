import React from "react";
import MoviesWrapper from "../components/ui/MoviesWrapper";
import { MoviesList, MoviesSort } from "../features/movies";

const DUMMY_MOVIES = [
	{
		id: "1",
		title: "Hello wordly! 1",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "2",
		title: "Hello wordly! 2",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "3",
		title: "Hello wordly! 3",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "4",
		title: "Hello wordly! 4",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "5",
		title: "Hello wordly! 5",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "6",
		title: "Hello wordly! 6",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "7",
		title: "Hello wordly! 7",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "8",
		title: "Hello wordly! 8",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "9",
		title: "Hello wordly! 9",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "10",
		title: "Hello wordly! 10",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "11",
		title: "Hello wordly! 11",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "12",
		title: "Hello wordly! 12",
		type: "series",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
] as {
	id: string;
	title: string;
	type: "films" | "series" | "cartoons";
	imgUrl: string;
}[];

const Series = () => {
	return <MoviesWrapper type="series" title="Series" movies={DUMMY_MOVIES} />;
};

export default Series;
