import styled from "styled-components";

export const StyledTopMoviesItem = styled.li`
	overflow: hidden;
	border: 1px solid #010a10;
	box-shadow: 2px 2px 5px #ccc;
	border-radius: 5px;
	background-color: #211d21;

	& div {
		width: 100%;
		height: auto;
		overflow: hidden;
		& img {
			width: 100%;
			height: 100%;
		}
	}

	& h4 {
		padding: 10px 5px;
		font-weight: 700;
		color: #dfe2db;
	}
`;
