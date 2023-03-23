import React from "react";
import CollectionsWrapper from "../components/ui/CollectionsWrapper";
import { MoviesList } from "../features/movies";

const DUMMY_MOVIES = [
	{
		id: "1",
		title: "Hello wordly! 1",
		type: "films",
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
		type: "films",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
	},
	{
		id: "4",
		title: "Hello wordly! 4",
		type: "films",
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
] as {
	id: string;
	title: string;
	type: "films" | "series" | "cartoons";
	imgUrl: string;
}[];

const New = () => {
	return (
		<CollectionsWrapper
			title="New"
			description="Here you can find all new movies released less than year ago"
			movies={DUMMY_MOVIES}
		/>
	);
};

//Should fetch all new MOVIES

export default New;
