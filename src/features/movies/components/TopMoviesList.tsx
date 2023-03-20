import React from "react";
import { Link } from "react-router-dom";
import { StyledTopMoviesList } from "./styles/TopMoviesList.styled";
import TopMoviesItem from "./TopMoviesItem";

import moviesTop from "../data/movies-top.json";

const TopMoviesList = () => {
	return (
		<StyledTopMoviesList>
			<h2>
				The best <span>FIVE</span>
			</h2>
			<ul>
				{moviesTop.map((movie) => (
					<Link
						to={`movies/${movie.type}/${movie.genre}/details/${movie.id}`}
						key={movie.id}
					>
						<TopMoviesItem
							imgUrl={movie.imgUrl}
							title={movie.title}
						></TopMoviesItem>
					</Link>
				))}
			</ul>
		</StyledTopMoviesList>
	);
};

export default TopMoviesList;
