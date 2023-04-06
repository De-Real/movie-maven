import React from "react";
import { StyledMoviesSort } from "./styles/MoviesSort.styled";
import { NavLink } from "react-router-dom";
import { switchGenres } from "../utils/switchGenres";
import SortSelection from "../../../components/form/SortSelection";
import LinearCheckbox from "../../../components/form/LinearCheckbox";

const MoviesSort = ({
	type,
}: {
	type: "films" | "series" | "cartoons" | "movies";
}) => {
	const genres = switchGenres(type);

	return (
		<StyledMoviesSort isMoviesType={type === "movies" ? true : false}>
			{type !== "movies" && (
				<div className="genres">
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
			<SortSelection />
			{type === "movies" && <LinearCheckbox />}
		</StyledMoviesSort>
	);
};

export default MoviesSort;
