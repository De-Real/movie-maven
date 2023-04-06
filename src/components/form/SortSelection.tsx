import React, { useState } from "react";
import { StyledSortSelection } from "./styles/SortSelections.styled";

const SortSelection = () => {
	const [age, setAge] = useState("");

	const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
		setAge(event?.currentTarget.value as string);
		console.log(event.currentTarget.value);
	};

	return (
		<>
			<StyledSortSelection>
				<p>Sort by: </p>

				<div>
					<select onChange={handleChange} value={age}>
						<option value="preferences">Preferences</option>
						<option value="release-date">Release date</option>
						<option value="rating">Rating</option>
					</select>
				</div>
			</StyledSortSelection>
		</>
	);
};

export default SortSelection;
