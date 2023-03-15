import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	background-color: bisque;
	align-items: center;
	height: 80px;
	padding: 0 80px 0 45px;

	a {
		color: black;
	}
`;

export const Logo = styled.div`
	font-size: 48px;
	flex: 1 1 auto;
`;

export const Controls = styled.div`
	display: flex;
	gap: 25px;
	font-size: 24px;
`;
