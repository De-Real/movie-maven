import styled from "styled-components";

export const StyledTopFilmsList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 260px;
	padding: 15px;

	& h2 {
		font-size: 32px;
		margin-bottom: 20px;
	}

	& ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
	}

	& li {
		height: 150px;
		border: 1px solid black;
		border-radius: 5px;
	}
`;
