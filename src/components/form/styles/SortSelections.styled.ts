import styled from "styled-components";

export const StyledSortSelection = styled.div`
	flex: 1 0 250px;
	max-width: 400px;
	padding: 0 15px;
	color: #a50113;
	display: flex;
	align-items: center;
	gap: 15px;
	border: 1px solid rgba(33, 29, 33, 0.225);
	border-radius: 5px;
	font-size: 18px;

	& p {
		flex: 0 1 80px;
	}

	& div {
		flex: 1 1 auto;
	}

	& select {
		background-color: transparent;
		font-size: 18px;
		width: 100%;
		padding: 5.5px 0;
		color: rgba(33, 29, 33, 0.89);
		cursor: pointer;
	}

	& option {
		background-color: #dfe2db;
	}
`;
