import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	background-color: #211d21;
	align-items: center;
	height: 80px;
	padding: 0 80px 0 45px;
`;

export const Logo = styled.div`
	font-size: 48px;
	flex: 1 1 auto;

	& span {
		color: #c10206;
	}
`;

export const Controls = styled.div`
	display: flex;
	gap: 25px;
	font-size: 24px;
`;

export const FilledLink = styled(Link)`
	color: #a50113;
`;

export const CommonLink = styled(Link)`
	color: #fffbf2;
`;
