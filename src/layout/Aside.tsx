import React from "react";
import { TopMoviesList } from "../features/movies";
import { StyledAside } from "./styles/Aside.styled";

const Aside = () => {
	return (
		<StyledAside>
			<TopMoviesList />
		</StyledAside>
	);
};

export default Aside;
