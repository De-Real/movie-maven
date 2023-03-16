import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { StyledSearchInput } from "./styles/SearchInput.styled";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
	return (
		<StyledSearchInput>
			<label htmlFor="input">
				<SearchIcon fontSize="inherit" />
			</label>
			<input id="input" placeholder={placeholder} />
		</StyledSearchInput>
	);
};

export default SearchInput;
