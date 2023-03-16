import { default as Btn } from "@mui/material/Button";

type BtnProps = {
	variant?: "contained" | "outlined";
	children: string;
};

const Button = ({ variant = "contained", children }: BtnProps) => {
	return (
		<Btn variant={variant} color="inherit">
			{children}
		</Btn>
	);
};

export default Button;
