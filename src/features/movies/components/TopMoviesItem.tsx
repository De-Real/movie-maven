import React from "react";
import { StyledTopMoviesItem } from "./styles/TopMoviesItem.styled";

type TopMoviesItemProps = {
	title: string;
	imgUrl: string;
};

const TopMoviesItem = ({ title, imgUrl }: TopMoviesItemProps) => {
	return (
		<StyledTopMoviesItem>
			<div>
				<img src={imgUrl} alt={title} />
			</div>
			<h4> {title} </h4>
		</StyledTopMoviesItem>
	);
};

export default TopMoviesItem;
