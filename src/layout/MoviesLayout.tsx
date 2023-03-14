import React from "react";
import { Outlet } from "react-router-dom";

const MoviesLayout = () => {
	return (
		<section>
			<header> Movies header</header>
			<Outlet />
		</section>
	);
};

export default MoviesLayout;
