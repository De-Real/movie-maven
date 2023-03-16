import React from "react";
import SearchInput from "../../../components/form/SearchInput";
import {
	MoviesGenreLinks,
	MoviesCollections,
	StyledMoviesHeader,
	StyledNavLink,
} from "./styles/MoviesHeader.styled";

const MoviesHeader = () => {
	return (
		<StyledMoviesHeader>
			<MoviesGenreLinks>
				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies"
					end
				>
					All
				</StyledNavLink>

				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies/films"
				>
					Films
				</StyledNavLink>

				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies/serials"
				>
					Serials
				</StyledNavLink>

				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies/cartoons"
				>
					Cartoons
				</StyledNavLink>
			</MoviesGenreLinks>
			<MoviesCollections>
				{/* {Should be done as a new pages?} */}
				<p>Collections</p>
				<p>New</p>
			</MoviesCollections>
			<SearchInput placeholder="Enter movie name" />
		</StyledMoviesHeader>
	);
};

export default MoviesHeader;
