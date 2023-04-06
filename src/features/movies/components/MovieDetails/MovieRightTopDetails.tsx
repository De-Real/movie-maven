import { Link } from "react-router-dom";
import MovieRatings from "./MovieRatings";
import { MovieDetail } from "./styles/MovieRightTopDetails.styled";

const MovieRightTopDetails = () => {
	//Винести більшість данних в об'єкти
	return (
		<div>
			<MovieRatings />
			<MovieDetail>
				<span>Release date: </span>
				<span>28.12.2024</span>
			</MovieDetail>
			<MovieDetail>
				<span>Included in collections: </span>
				<Link to="/movies/collections/top-5-2024-films">Top 5 2024 films</Link>,
				<Link to="/movies/collections/top-10-the-best-detective-drama">
					TOP 10 the best detective drama
				</Link>
			</MovieDetail>
			<MovieDetail>
				<span>Slogan: </span>
				<span>Just do your work and everything you get</span>
			</MovieDetail>
			<MovieDetail>
				<span>Country: </span>
				<span>Brazil</span>
			</MovieDetail>
			<MovieDetail>
				<span>Age restrictions: </span>
				<span>21+</span>
			</MovieDetail>
			<MovieDetail>
				<span>Genre: </span>
				<Link to="/movies/films/drama">Drama</Link>,
				<Link to="/movies/films/detectives"> Detectives</Link>,
				<Link to="/movies/films/foreigh">Foreigh</Link>
			</MovieDetail>

			<MovieDetail>
				<span>Producer(s): </span>
				<span>Rendal Lobb, Nika Grounny</span>
			</MovieDetail>

			<MovieDetail>
				<span>Staring: </span>
				<span>
					Jane Kring, Nicole Admin, Malaya Bou, Kim Array, Jame Midway, Kate
					MacTommny
				</span>
			</MovieDetail>
			<MovieDetail>
				<span>Original language: </span>
				<span>English</span>
			</MovieDetail>
		</div>
	);
};

export default MovieRightTopDetails;
