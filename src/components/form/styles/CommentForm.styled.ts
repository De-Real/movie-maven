import styled from "styled-components";

export const StyledCommentForm = styled.form`
	padding: 10px 0 25px 0;
	width: 500px;
	font-weight: 500;
	color: #a50113;

	& textarea {
		resize: vertical;
		overflow: hidden;
		width: 100%;
		min-height: 130px;
		padding: 5px;
		border: 1px solid black;
		border-radius: 5px;
		margin-bottom: 5px;
	}
`;

export const StyledButton = styled.div`
	text-align: right;
`;
