import React from "react";
import Aside from "./Aside";

const Content = ({ children }: { children: React.ReactNode }) => {
	return (
		<main style={{ display: "flex" }}>
			<Aside />
			{children}
		</main>
	);
};

export default Content;
