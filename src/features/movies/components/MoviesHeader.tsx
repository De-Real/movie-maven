import React from "react";
import { Link } from "react-router-dom";
import { StyledMoviesHeader } from "./styles/MoviesHeader.styled";

const MoviesHeader = () => {
	return (
		<StyledMoviesHeader>
			<p>
				<Link to="/movies">All</Link>
			</p>
			<p>
				<Link to="/movies/films">Films</Link>
			</p>
			<p>
				<Link to="/movies/serials">Serials</Link>
			</p>
			<p>
				<Link to="/movies/cartoons">Cartoons</Link>
			</p>

			<p>Collections</p>
			<p>New</p>
			<p> Search input</p>
		</StyledMoviesHeader>
	);
};

export default MoviesHeader;
