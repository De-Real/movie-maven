import styled from "styled-components";

export const StyledCard = styled.li`
	overflow: hidden;
	border: 1px solid #010a10;
	box-shadow: 2px 2px 5px #ccc;
	border-radius: 5px;
	background-color: #211d21;
	position: relative;
	cursor: pointer;

	& div > img {
		width: 100%;
		max-height: 260px;
	}

	& h4 {
		font-weight: 700;
		font-size: 20px;
		color: #dfe2db;
		padding: 5px;
	}

	& .type {
		position: absolute;
		top: 0;
		right: 0;
		padding: 2px 10px;
		background-color: #dfe2db;
		border-radius: 0 5px 0 5px;
		color: #a50113;
		font-weight: 500;
	}
`;
