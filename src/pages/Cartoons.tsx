import React from "react";
import MoviesWrapper from "../components/ui/MoviesWrapper";

const DUMMY_MOVIES = [
	{
		id: "1",
		title: "Hello wordly! 1",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "2",
		title: "Hello wordly! 2",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "3",
		title: "Hello wordly! 3",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "4",
		title: "Hello wordly! 4",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "5",
		title: "Hello wordly! 5",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "6",
		title: "Hello wordly! 6",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "7",
		title: "Hello wordly! 7",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "8",
		title: "Hello wordly! 8",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "9",
		title: "Hello wordly! 9",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "10",
		title: "Hello wordly! 10",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "11",
		title: "Hello wordly! 11",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "12",
		title: "Hello wordly! 12",
		type: "cartoons",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
] as {
	id: string;
	title: string;
	type: "films" | "series" | "cartoons";
	imgUrl: string;
}[];

const Cartoons = () => {
	return (
		<MoviesWrapper type="cartoons" title="Cartoons" movies={DUMMY_MOVIES} />
	);
};

export default Cartoons;
