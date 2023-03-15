import React from "react";
import { StyledTopFilmsList } from "./styles/TopFilmsList.styled";

const TopFilmsList = () => {
	return (
		<StyledTopFilmsList>
			<h2> The best five </h2>
			<ul>
				<li> Film 1 </li>
				<li> Film 2</li>
				<li>Film 3</li>
				<li> Film 4</li>
				<li>Film 5</li>
			</ul>
		</StyledTopFilmsList>
	);
};

export default TopFilmsList;
