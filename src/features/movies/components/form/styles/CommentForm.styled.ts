import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCommentForm = styled(motion.form)<{ isAnswer: boolean }>`
	padding: 10px 0 25px 0;
	width: ${({ isAnswer }) => (isAnswer ? "100%" : "500px")};
	font-weight: 500;
	color: #a50113;

	& textarea {
		resize: vertical;
		overflow: hidden;
		width: 100%;
		min-height: ${({ isAnswer }) => (isAnswer ? "85px" : "130px;")};
		padding: 5px;
		border: 1px solid #211d21;
		border-radius: 5px;
		margin-bottom: 5px;
		transition: all 1s ease 0;

		&:focus {
			box-shadow: 0 0 5px rgba(33, 29, 33, 0.3);
		}
	}

	& p {
		margin: 0;
	}
`;

export const StyledButton = styled.div`
	text-align: right;
	& button {
		margin-left: 15px;
	}
`;
