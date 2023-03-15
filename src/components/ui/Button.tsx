import { default as Btn } from "@mui/material/Button";
import styled from "styled-components";

type BtnProps = {
	variant?: "contained" | "outlined";
	children: string;
};

const Button = ({ variant = "contained", children }: BtnProps) => {
	return (
		<Btn sx={{ padding: "5px 20px" }} variant={variant}>
			{children}
		</Btn>
	);
};

export default Button;
