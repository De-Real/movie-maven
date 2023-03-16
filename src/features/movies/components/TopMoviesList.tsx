import React from "react";
import { StyledTopMoviesList } from "./styles/TopMoviesList.styled";

const TopMoviesList = () => {
	return (
		<StyledTopMoviesList>
			<h2>
				The best <span>FIVE</span>
			</h2>
			<ul>
				<li> Film 1 </li>
				<li> Film 2</li>
				<li>Film 3</li>
				<li> Film 4</li>
				<li>Film 5</li>
			</ul>
		</StyledTopMoviesList>
	);
};

export default TopMoviesList;
