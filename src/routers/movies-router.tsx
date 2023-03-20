import MoviesLayout from "../layout/MoviesLayout";
import Cartoons from "../pages/Cartoons";
import DetailedCartoon from "../pages/DetailedCartoon";
import DetailedFilm from "../pages/DetailedFilm";
import DetailedSerial from "../pages/DetailedSerial";
import Films from "../pages/Films";
import Movies from "../pages/Movies";
import Serials from "../pages/Serials";

export const moviesRouter = {
	path: "movies",
	element: <MoviesLayout />,
	children: [
		{ index: true, element: <Movies /> },
		{
			path: "films",
			children: [
				{
					index: true,
					element: <Films />,
				},
				{
					path: ":movieGenre",
					element: <Films />,
				},
				{
					path: ":movieGenre/details/:movieId",
					element: <DetailedFilm />,
				},
			],
		},
		{
			path: "serials",
			children: [
				{
					index: true,
					element: <Serials />,
				},
				{
					path: ":movieGenre",
					element: <Serials />,
				},
				{
					path: ":movieGenre/details/:movieId",
					element: <DetailedSerial />,
				},
			],
		},
		{
			path: "cartoons",
			children: [
				{
					index: true,
					element: <Cartoons />,
				},
				{
					path: ":movieGenre",
					element: <Cartoons />,
				},
				{
					path: ":movieGenre/details/:movieId",
					element: <DetailedCartoon />,
				},
			],
		},
	],
};
