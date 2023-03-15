import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMoviesHeader = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 60px;
	font-size: 20px;
	& a {
		color: black;
	}
`;

export const StyledNavLink = styled(NavLink)`
	&.active {
		text-decoration: underline;
	}
`;
