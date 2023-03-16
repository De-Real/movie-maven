import styled from "styled-components";

export const StyledSearchInput = styled.form`
	width: 200px;
	display: flex;
	font-size: 28px;
	border-radius: 5px;

	& label {
		cursor: pointer;
	}

	& input {
		padding: 3px 5px;
		width: 100%;
		font-size: 18px;
		background-color: transparent;
		&::placeholder {
			font-size: 16px;
		}
	}
`;
