import React from "react";
import Card from "../../../components/ui/Card";

type TopMoviesItemProps = {
	title: string;
	imgUrl: string;
};

const TopMoviesItem = ({ title, imgUrl }: TopMoviesItemProps) => {
	return (
		<Card>
			<div>
				<img src={imgUrl} alt={title} />
			</div>
			<h4> {title} </h4>
		</Card>
	);
};

export default TopMoviesItem;
