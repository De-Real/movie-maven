import styled from "styled-components";

export const StyledMovieComment = styled.li`
	background-color: #dfe2db;
	border: 1px solid #211d21;
	border-radius: 5px;
	padding: 10px;
	max-width: 700px;
	position: relative;

	box-shadow: 2px 2px 5px #ccc;
	& button {
		background-color: transparent;
	}
`;

export const MovieCommentHeader = styled.div`
	display: flex;
	gap: 20px;
	font-weight: 700;
	color: #a50113;
`;

export const MovieCommentText = styled.div`
	max-width: 400px;
	margin-bottom: 10px;
	padding: 0 10px;
`;

export const MovieCommentControl = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
	padding: 0 60px;
	& button {
		display: flex;
		align-items: center;

		padding: 5px;
		gap: 5px;
	}
`;

export const MovieCommentReport = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
`;
