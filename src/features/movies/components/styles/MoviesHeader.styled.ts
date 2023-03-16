import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMoviesHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 60px;
	font-size: 20px;
	padding: 0 15px;
	border-radius: 10px;
	margin-top: 15px;

	background-color: #dfe2db;

	& a {
		color: #c10206;
	}
`;

export const StyledNavLink = styled(NavLink)`
	&.active {
		text-decoration: underline;
	}
`;

export const MoviesGenreLinks = styled.div`
	display: flex;
	gap: 20px;
`;

export const MoviesCollections = styled.div`
	display: flex;
	gap: 25px;
	padding: 5px 25px;
	border-radius: 5px;
	border: 1px solid black;
`;
