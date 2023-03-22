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
		<StyledSortSelection>
			<FormControl variant="standard" sx={{ width: "100%" }} color="error">
				<InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={age}
					onChange={handleChange}
					label="Age"
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value="preferences">Preferences</MenuItem>
					<MenuItem value="release-date">Release date</MenuItem>
					<MenuItem value="rating">Rating</MenuItem>
				</Select>
			</FormControl>
		</StyledSortSelection>
	);
};

export default SortSelection;
