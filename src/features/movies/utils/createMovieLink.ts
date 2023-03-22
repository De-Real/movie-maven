export const createMovieLink = (
	type: string,
	genre: string,
	id: string | number
) => {
	return `/movies/${type}/${genre}/details/${id}`;
};
