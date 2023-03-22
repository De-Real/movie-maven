import styled from "styled-components";

export const StyledMoviesCollection = styled.div`
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	font-weight: 700;

	& p {
		position: absolute;
		top: 0;
		right: 0;
		padding: 7px 12px;
		background-color: rgba(223, 226, 219, 0.95);
		border-bottom-left-radius: 3px;

		color: #a50113;
	}

	& img {
		width: 100%;
		height: 100%;
	}

	& h4 {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 5px 7px;
		font-size: 16px;
		background-color: rgba(223, 226, 219, 0.6);
		font-weight: 500;
		color: #211d21;
		line-height: 0.75;
		
	}
`;
