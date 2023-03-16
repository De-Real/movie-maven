import React from "react";
import { StyledContainer } from "./styles/Container.styled";

const Container = ({ children }: { children: React.ReactNode }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
