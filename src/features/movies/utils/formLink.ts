export const formLink = (type: "collections" | "genres", value: string) => {
	if (type === "collections") {
		return `/movies/collections/${value.toLowerCase().split(" ").join("-")}`;
	}
	if (type === "genres") {
		return `/movies/cartoons/${value}`;
	}
	return '/movies'
};
