import React from "react";
import { StyledMoviesSort } from "./styles/MoviesSort.styled";
import filmsGenres from "../data/films-genres.json";
import { NavLink } from "react-router-dom";
import { switchGenres } from "../utils/switchGenres";

const MoviesSort = ({
	type,
}: {
	type: "films" | "series" | "cartoons" | "movies";
}) => {
	const genres = switchGenres(type);

	return (
		<StyledMoviesSort>
			{type !== "movies" && (
				<div>
					{genres.map((genre) => (
						<NavLink
							className={({ isActive }) => (isActive ? "active" : "")}
							to={`/movies/${type}/${genre.toLowerCase()}`}
							key={genre}
						>
							{genre}
						</NavLink>
					))}
				</div>
			)}
			<p>Sort by: popularity, release date, your preferences </p>
			{type === "movies" && <p>Show: all films serials cartoons</p>}
		</StyledMoviesSort>
	);
};

export default MoviesSort;
