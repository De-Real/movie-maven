import React, { useState } from "react";
import { Label, StyledLinearCheckbox } from "./styles/LinearCheckbox.styled";

const LinearCheckbox = () => {
	const [values, setValues] = useState({
		films: false,
		series: false,
		cartoons: false,
	});

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;

		setValues((prevState) => {
			return { ...prevState, [target.name]: target.checked };
		});
	};

	return (
		<StyledLinearCheckbox>
			<p>Show: </p>

			<Label active={values.films} htmlFor="films-input">
				films
			</Label>
			<input
				id="films-input"
				type="checkbox"
				name="films"
				onChange={changeHandler}
			/>
			<Label active={values.series} htmlFor="series-input">
				series
			</Label>
			<input
				id="series-input"
				type="checkbox"
				name="series"
				onChange={changeHandler}
			/>
			<Label active={values.cartoons} htmlFor="cartoons-input">
				cartoons
			</Label>
			<input
				id="cartoons-input"
				type="checkbox"
				name="cartoons"
				onChange={changeHandler}
			/>
		</StyledLinearCheckbox>
	);
};

export default LinearCheckbox;
