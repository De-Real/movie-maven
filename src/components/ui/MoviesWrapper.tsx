import { MoviesList, MoviesSort } from "../../features/movies";

type MoviesWrapperProps = {
	movies: {
		id: string;
		title: string;
		imgUrl: string;
	}[];
	title: string;
	type: "films" | "series" | "cartoons" | "movies";
};

const MoviesWrapper = ({
	type = "movies",
	title,
	movies,
}: MoviesWrapperProps) => {
	return (
		<>
			<MoviesSort type={type} />
			<h3>{title}</h3>
			<MoviesList movies={movies} />
		</>
	);
};

export default MoviesWrapper;
