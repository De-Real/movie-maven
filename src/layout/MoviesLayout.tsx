import React from "react";
import { Outlet } from "react-router-dom";
import { MoviesHeader } from "../features/movies";

const MoviesLayout = () => {
	return (
		<section style={{ width: "100%" }}>
			<MoviesHeader />
			<Outlet />
		</section>
	);
};

export default MoviesLayout;
