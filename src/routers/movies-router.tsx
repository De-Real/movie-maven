import MoviesLayout from "../layout/MoviesLayout";
import Cartoons from "../pages/Cartoons";
import DetailedCartoon from "../pages/DetailedCartoon";
import DetailedFilm from "../pages/DetailedFilm";
import DetailedSerial from "../pages/DetailedSerial";
import Films from "../pages/Films";
import Serials from "../pages/Serials";

export const moviesRouter = {
	path: "movies",
	element: <MoviesLayout />,
	children: [
		{
			path: "films",
			children: [
				{
					index: true,
					element: <Films />,
				},
				{
					path: ":filmId",
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
					path: ":filmId",
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
					path: ":filmId",
					element: <DetailedCartoon />,
				},
			],
		},
	],
};
