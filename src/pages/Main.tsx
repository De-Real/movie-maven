import { useState } from "react";
import { changeExampleValue, selectExampleValue } from "../store/example-slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { StyledMain } from "./styles/Main.styled";

const MainPage = () => {
	const [state, setState] = useState("");

	const value = useAppSelector(selectExampleValue);
	const dispatch = useAppDispatch();

	const valueChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setState(event.currentTarget.value);
	};

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch(changeExampleValue(state));
	};

	return (
		<StyledMain>
			<p> Value: {value}</p>
			<form onSubmit={submitHandler}>
				<label htmlFor="input">Input value</label>
				<input id="input" onChange={valueChangeHandler} value={state} />
				<button> Change value</button>
			</form>
		</StyledMain>
	);
};

export default MainPage;
