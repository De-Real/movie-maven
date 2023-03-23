import styled from "styled-components";

export const StyledMovieDetails = styled.div``;

export const MovieDetailsTop = styled.div`
	display: flex;
	gap: 25px;
`;

export const MovieDetailsBlock = styled.div`
	padding: 15px 0;

	& h4 {
		font-size: 24px;
		font-weight: 700;
		color: #a50113;
		margin-bottom: 5px;
	}

	& p {
		margin-bottom: 10px;
	}
`;

export const MovieDetail = styled.p`
	padding: 5px 0;
	& :first-child {
		font-weight: 700;
	}
`;

export const MoviePhoto = styled.div`
	width: 220px;

	& img {
		width: 100%;
		height: auto;
	}
`;

export const MovieRatings = styled.div`
	& span {
		font-weight: 700;
	}
`;
