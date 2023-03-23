import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { StyledSortSelection } from "./styles/SortSelections.styled";

const SortSelection = () => {
	const [age, setAge] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<>
			<StyledSortSelection>
				<p>Sort by: </p>

				<div>
					<select>
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
