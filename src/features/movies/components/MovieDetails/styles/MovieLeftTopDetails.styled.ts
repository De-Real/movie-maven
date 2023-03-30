import styled from "styled-components";

export const StyledMovieLeftTopDetails = styled.div`
	width: 220px;

	& img {
		width: 100%;
		height: auto;
		margin-bottom: 20px;
		border: 5px double #dfe2db;
		border-radius: 7px;
		box-shadow: 1px 1px 10px #dfe2db;
	}
`;

export const StyledMovieRating = styled.div`
	& div {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 5px 0;
	}

	& p {
		display: flex;
		gap: 10px;
		align-items: center;
		font-weight: 600;
	}

	& span.value {
		font-size: 18px;
	}
`;

export const StyledMovieRatingFeedback = styled.p`
	height: 20px;
	color: #a50113;
`;
