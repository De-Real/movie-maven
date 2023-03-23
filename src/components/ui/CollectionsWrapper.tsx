import React from "react";
import { MoviesList } from "../../features/movies";
import { StyledCollectionsWrapper } from "./styles/CollectionsWrapper.styled";

type CollectionWrapperProps = {
	title: string;
	children?: React.ReactNode;
	description: string;
	movies: {
		id: string;
		title: string;
		type: "films" | "series" | "cartoons";
		imgUrl: string;
	}[];
};

const CollectionsWrapper = ({
	title,
	children,
	description,
	movies,
}: CollectionWrapperProps) => {
	return (
		<StyledCollectionsWrapper>
			<h3>{title}</h3>
			{children}
			<div className="description">{description}</div>
			<MoviesList movies={movies} />
		</StyledCollectionsWrapper>
	);
};

export default CollectionsWrapper;
