import styled from "styled-components";

export const StyledLinearCheckbox = styled.div`
	display: flex;
	gap: 10px;
	padding: 20px 25px 0 25px;

	label {
		cursor: pointer;
	}

	input[type="checkbox"] {
		display: none;
	}
`;

export const Label = styled.label<{ active: boolean }>`
	text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;
