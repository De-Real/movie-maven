import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<header> Primitive header</header>
			<article style={{ display: "flex" }}>
				<aside> TOP 5 films</aside>
				<Outlet />
			</article>
		</>
	);
};

export default RootLayout;
