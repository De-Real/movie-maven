import React from "react";
import { TopFilmsList } from "../features/movies";
import { StyledAside } from "./styles/Aside.styled";

const Aside = () => {
	return (
		<StyledAside>
			<TopFilmsList />
		</StyledAside>
	);
};

export default Aside;
