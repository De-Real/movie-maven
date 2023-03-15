import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/ui/Container";
import { MoviesHeader } from "../features/movies";

const MoviesLayout = () => {
	return (
		<section style={{ width: "100%" }}>
			<MoviesHeader />
			<Container>
				<Outlet />
			</Container>
		</section>
	);
};

export default MoviesLayout;
