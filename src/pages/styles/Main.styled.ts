import styled from "styled-components";

export const StyledMain = styled.div`
	width: 100%;
	background-color: #ccc;
	text-align: center;
	padding: 25px;

	& form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	& p {
		font-size: 24px;
	}

	& input,
	& button {
		width: 200px;
		border-radius: 5px;
		padding: 7px;
	}
`;
