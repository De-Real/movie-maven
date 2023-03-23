import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../components/ui/IconButton";
import UndoIcon from "@mui/icons-material/Undo";
import { MoviesList } from "../features/movies";
import CollectionsWrapper from "../components/ui/CollectionsWrapper";

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

const DetailedCollection = () => {
	return (
		<CollectionsWrapper
			title="Collection name"
			description="Collection description Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Temporibus repellendus facere recusandae, totam
		dolorem eius eligendi omnis magni sequi labore, maiores assumenda
		incidunt soluta, nisi libero magnam harum amet velit?"
			movies={DUMMY_MOVIES}
		>
			<Link
				style={{
					color: "#A50113",
				}}
				to=".."
			>
				<IconButton>
					<UndoIcon /> <span>Back to collections</span>
				</IconButton>
			</Link>
		</CollectionsWrapper>
	);
};

export default DetailedCollection;
