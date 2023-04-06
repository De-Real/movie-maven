import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledComment = styled(motion.div)`
	background-color: rgba(223, 226, 219, 0.2);
	border: 1px solid rgba(223, 226, 219, 0.4);
	border-radius: 5px;
	padding: 10px;
	max-width: 100%;
	position: relative;

	box-shadow: 2px 2px 5px #ccc;
	& button {
		background-color: transparent;
	}
`;

export const CommentHeader = styled.div`
	display: flex;
	gap: 20px;
	font-weight: 700;
	color: #a50113;
`;

export const CommentText = styled.div`
	max-width: 400px;
	margin-bottom: 10px;
	padding: 0 10px;
`;

export const CommentReport = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
`;
