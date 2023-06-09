import { default as Btn } from "@mui/material/Button";
import styled from "styled-components";

type BtnProps = {
	variant?: "contained" | "outlined";
	children: React.ReactNode;
};

const StyledBtn = styled(Btn)`
	display: flex;
	gap: 10px;
`;

const IconButton = ({
	variant = "contained",
	children,
	onClick,
}: BtnProps & React.ComponentPropsWithRef<"button">) => {
	return (
		<StyledBtn onClick={onClick} variant={variant} color="inherit">
			{children}
		</StyledBtn>
	);
};

export default IconButton;
