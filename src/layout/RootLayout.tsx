import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const RootLayout = () => {
	return (
		<>
			<Header />
			<Content>
				<Outlet />
			</Content>
			<Footer />
		</>
	);
};

export default RootLayout;
