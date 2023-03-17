import { Grid } from "@mui/material";
import { StyledMoviesItem } from "./styles/MoviesItem.styled";

type MovieItemProps = {
	title: string;
};

const MoviesItem = ({ title }: MovieItemProps) => {
	return (
		<Grid item xs={6} sm={4} md={3} lg={2}>
			<StyledMoviesItem>{title}</StyledMoviesItem>
		</Grid>
	);
};

export default MoviesItem;
