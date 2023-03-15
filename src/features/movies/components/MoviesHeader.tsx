import React from "react";
import { Link } from "react-router-dom";
import {
	StyledMoviesHeader,
	StyledNavLink,
} from "./styles/MoviesHeader.styled";

const MoviesHeader = () => {
	return (
		<StyledMoviesHeader>
			<p>
				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies"
					end
				>
					All
				</StyledNavLink>
			</p>
			<p>
				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies/films"
				>
					Films
				</StyledNavLink>
			</p>
			<p>
				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies/serials"
				>
					Serials
				</StyledNavLink>
			</p>
			<p>
				<StyledNavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/movies/cartoons"
				>
					Cartoons
				</StyledNavLink>
			</p>

			<p>Collections</p>
			<p>New</p>
			<p> Search input</p>
		</StyledMoviesHeader>
	);
};

export default MoviesHeader;
