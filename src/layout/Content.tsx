import React from "react";
import Aside from "./Aside";
import { MainContent } from "./styles/Content.styled";

const Content = ({ children }: { children: React.ReactNode }) => {
	return (
		<MainContent>
			<Aside />
			{children}
		</MainContent>
	);
};

export default Content;
