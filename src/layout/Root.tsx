import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<header> Primitive header</header>
			<Outlet />
		</>
	);
};

export default Root;
