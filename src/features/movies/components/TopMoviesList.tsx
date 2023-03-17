import React from "react";
import { StyledTopMoviesList } from "./styles/TopMoviesList.styled";
import TopMoviesItem from "./TopMoviesItem";

const DUMMY_MOVIES = [
	{
		id: "t1",
		title: "Knives out",
		imgUrl:
			"https://upload.wikimedia.org/wikipedia/en/1/1f/Knives_Out_poster.jpeg",
	},
	{
		id: "t2",
		title: "No heroes here",
		imgUrl:
			"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71h4MXEXyDL.jpg",
	},
	{
		id: "t3",
		title: "Be like them",
		imgUrl:
			"https://m.media-amazon.com/images/M/MV5BMTc0Njc1MTU5Nl5BMl5BanBnXkFtZTcwMjA4NDE2MQ@@._V1_.jpg",
	},
	{
		id: "t4",
		title: "Heroes right here",
		imgUrl:
			"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71h4MXEXyDL.jpg",
	},
	{
		id: "t5",
		title: "Heroes right here",
		imgUrl:
			"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71h4MXEXyDL.jpg",
	},
];

const TopMoviesList = () => {
	return (
		<StyledTopMoviesList>
			<h2>
				The best <span>FIVE</span>
			</h2>
			<ul>
				{DUMMY_MOVIES.map((movie) => (
					<TopMoviesItem
						key={movie.id}
						imgUrl={movie.imgUrl}
						title={movie.title}
					/>
				))}
			</ul>
		</StyledTopMoviesList>
	);
};

export default TopMoviesList;
