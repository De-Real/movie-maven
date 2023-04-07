import { Link } from "react-router-dom";
import MovieRatings from "./MovieRatings";
import { MovieDetail } from "./styles/MovieRightTopDetails.styled";
import { formLink } from "../../utils/formLink";

const DETAILS = [
	{
		id: 1,
		title: "Release date",
		value: "28.12.2024",
	},
	{
		id: 2,
		title: "Included in collections",
		links: true,
		value: ["Top 5 2024 films", "TOP 10 the best detective drama"],
	},
	{
		id: 3,
		title: "Slogan",
		value: "Just do your work and everything you get",
	},
	{
		id: 4,
		title: "Country",
		value: "Brazil",
	},
	{
		id: 5,
		title: "Age restrictions",
		value: "21+",
	},
	{
		id: 6,
		title: "Genre",
		links: true,
		value: ["Drama", "Detective", "Foreigh"],
	},
	{
		id: 7,
		title: "Producer(s)",
		value: ["Rendal Lobb", "Nika Grounny"],
	},
	{
		id: 8,
		title: "Staring",
		value: [
			"Jane Kring",
			"Nicole Admin",
			"Malaya Bou",
			"Kim Array",
			"Jame Midway",
			"KateMacTommny",
		],
	},
	{
		id: 9,
		title: "Original language",
		value: "English",
	},
];

const MovieRightTopDetails = () => {
	return (
		<div>
			<MovieRatings />
			{DETAILS.map((detail) => {
				const isArray = Array.isArray(detail.value);

				let detailElement: JSX.Element | JSX.Element[];

				if (isArray && detail.links) {
					detailElement = (
						<span>
							{detail.value.map((item) => {
								return <Link to={formLink("collections", item)}>{item},</Link>;
							})}
						</span>
					);
				} else if (isArray && !detail.links) {
					detailElement = <span>{(detail.value as string[]).join(", ")}</span>;
				} else {
					detailElement = <span>{detail.value}</span>;
				}

				return (
					<MovieDetail key={detail.id}>
						<span>{detail.title}:</span>
						{detailElement}
					</MovieDetail>
				);
			})}
			{/* <MovieDetail>
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
			</MovieDetail> */}
		</div>
	);
};

export default MovieRightTopDetails;
