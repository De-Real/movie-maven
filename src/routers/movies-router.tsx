import MoviesLayout from "../layout/MoviesLayout";
import Cartoons from "../pages/Cartoons";
import Collections from "../pages/Collections";
import DetailedCartoon from "../pages/DetailedCartoon";
import DetailedCollection from "../pages/DetailedCollection";
import DetailedFilm from "../pages/DetailedFilm";
import DetailedSeries from "../pages/DetailedSeries";
import Films from "../pages/Films";
import Movies from "../pages/Movies";
import New from "../pages/New";
import Series from "../pages/Series";

export const moviesRouter = {
	path: "movies",
	element: <MoviesLayout />,
	children: [
		{ index: true, element: <Movies /> },
		{ path: "new", element: <New /> },
		{
			path: "collections",
			children: [
				{ index: true, element: <Collections /> },
				{
					path: ":collectionId",
					element: <DetailedCollection />,
				},
			],
		},
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
			path: "series",
			children: [
				{
					index: true,
					element: <Series />,
				},
				{
					path: ":movieGenre",
					element: <Series />,
				},
				{
					path: ":movieGenre/details/:movieId",
					element: <DetailedSeries />,
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
