import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMovieComment = styled(motion.div)<{ isAnswer: boolean }>`
	background-color: rgba(223, 226, 219, 0.2);
	border: 1px solid rgba(223, 226, 219, 0.4);
	border-radius: 5px;
	padding: 10px;
	/* max-width: ${({ isAnswer }) => (isAnswer ? "650px" : "700px")}; */
	max-width: 100%;
	position: relative;
	/* margin-left: ${({ isAnswer }) => (isAnswer ? "50px" : "0px")}; */

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
	padding: 0 5px;
`;

export const MovieCommentButton = styled.button`
	display: flex;
	align-items: center;

	padding: 5px;
	gap: 5px;
`;

export const MovieCommentReport = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
`;
