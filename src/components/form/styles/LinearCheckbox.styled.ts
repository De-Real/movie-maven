import styled from "styled-components";

export const StyledLinearCheckbox = styled.div`
	display: flex;
	gap: 10px;
	padding: 0 15px;
	border: 1px solid rgba(33, 29, 33, 0.225);
	border-radius: 5px;

	& p {
		padding: 5px 0;
	}

	& label {
		cursor: pointer;
		font-size: 18px;
		color: rgba(33, 29, 33, 0.89);
		padding: 5px;
	}

	& input[type="checkbox"] {
		display: none;
	}
`;

export const Label = styled.label<{ active: boolean }>`
	transition: all 0.3s ease 0;
	color: ${({ active }) => (active ? "#A50113" : "inherit")};
	text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;
