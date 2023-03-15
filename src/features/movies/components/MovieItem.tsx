import { Grid } from "@mui/material";
import { StyledMovieItem } from "./styles/MovieItem.styled";

type MovieItemProps = {
	title: string;
};

const MovieItem = ({ title }: MovieItemProps) => {
	return (
		<Grid item xs={6} sm={4} md={3} lg={2}>
			<StyledMovieItem>{title}</StyledMovieItem>
		</Grid>
	);
};

export default MovieItem;
