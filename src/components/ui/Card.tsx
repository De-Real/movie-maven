import React from "react";
import { StyledCard } from "./styles/Card.styled";

type CardProps = {
	children: React.ReactNode;
};

const cardVariants = {
	hover: {
		scale: 1.03,
		transition: {
			type: "spring",
			duration: 0.5,
			repeat: Infinity,
			repeatType: "reverse" as const,
		},
	},
};

const Card = ({ children }: CardProps) => {
	return (
		<StyledCard variants={cardVariants} whileHover="hover">
			{children}
		</StyledCard>
	);
};

export default Card;
