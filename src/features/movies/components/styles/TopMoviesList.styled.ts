import styled from "styled-components";

export const StyledTopMoviesList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 260px;
	padding: 15px;

	& h2 {
		font-size: 32px;
		margin-bottom: 10px;
		font-weight: 700;
		color: #a50113;

		& span {
			color: #211d21;
		}
	}

	& ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
	}

	
`;
