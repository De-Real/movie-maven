import React from "react";
import { Link } from "react-router-dom";
import { StyledTopMoviesList } from "./styles/TopMoviesList.styled";
import TopMoviesItem from "./TopMoviesItem";

import moviesTop from "../data/movies-top.json";
import { createMovieLink } from "../utils/createMovieLink";

const TopMoviesList = () => {
	return (
		<StyledTopMoviesList>
			<h2>
				The best <span>FIVE</span>
			</h2>
			<ul>
				{moviesTop.map((movie) => (
					<Link
						to={createMovieLink(movie.type, movie.genre, movie.id)}
						key={movie.id}
					>
						<TopMoviesItem
							imgUrl={movie.imgUrl}
							title={movie.title}
							type={movie.type as "films" | "series" | "cartoons"}
						/>
					</Link>
				))}
			</ul>
		</StyledTopMoviesList>
	);
};

export default TopMoviesList;
