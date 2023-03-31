import React from "react";
import { default as Btn } from "@mui/material/Button";

type BtnProps = {
	variant?: "contained" | "outlined";
	children: string;
};

const Button = ({
	variant = "contained",
	children,
	onClick,
}: BtnProps & React.ComponentPropsWithRef<"button">) => {
	return (
		<Btn onClick={onClick} variant={variant} color="inherit">
			{children}
		</Btn>
	);
};

export default Button;
