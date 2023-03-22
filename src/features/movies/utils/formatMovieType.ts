export const formatMovieType = (type: "series" | "films" | "cartoons") => {
	const upperCasedType = type.toUpperCase();

	if (upperCasedType === "SERIES") return type;

	return upperCasedType.slice(0, -1);
};
