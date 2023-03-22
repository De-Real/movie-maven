import React from "react";
import Card from "../../../components/ui/Card";
import { formatMovieType } from "../utils/formatMovieType";

type TopMoviesItemProps = {
	title: string;
	imgUrl: string;
	type: "films" | "series" | "cartoons";
};

const TopMoviesItem = ({ title, imgUrl, type }: TopMoviesItemProps) => {
	return (
		<Card>
			<div>
				<img src={imgUrl} alt={title} />
			</div>
			<h4> {title} </h4>
			<p className="type">{formatMovieType(type)}</p>
		</Card>
	);
};

export default TopMoviesItem;
