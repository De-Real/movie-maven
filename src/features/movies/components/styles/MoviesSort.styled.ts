import styled from "styled-components";

export const StyledMoviesSort = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 60px;
	padding: 10px 15px;
	border-radius: 10px;
	margin-top: 15px;
	background-color: #dfe2db;

	& a {
		color: black;
		padding: 0 5px;
	}

	& a.active {
		text-decoration: underline;
	}

	& div {
		width: 700px;
		display: flex;
		flex-wrap: wrap;
	}
`;
