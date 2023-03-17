import React from "react";
import { StyledCard } from "./styles/Card.styled";

const Card = ({ children }: { children: React.ReactNode }) => {
	return <StyledCard>{children}</StyledCard>;
};

export default Card;
