import React from "react";
import { StyledInput } from "./styles/Input.styled";

type InputProps = {
	label: string;
};

const Input = ({ label }: InputProps) => {
	return (
		<StyledInput>
			<label>{label}</label>
			<input />
		</StyledInput>
	);
};

export default Input;
