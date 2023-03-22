import { movieType } from "../../../types/movieType";

import seriesGenres from "../data/series-genres.json";
import filmsGenres from "../data/films-genres.json";
import cartoonsGenres from "../data/cartoons-genres.json";

export const switchGenres = (type: movieType | "movies") => {
	if (type === "movies") return [];
	if (type === "cartoons") return cartoonsGenres;
	if (type === "series") return seriesGenres;
	return filmsGenres;
};
