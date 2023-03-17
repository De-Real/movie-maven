import { Grid } from "@mui/material";
import Card from "../../../components/ui/Card";
import { StyledMoviesItemControl } from "./styles/MoviesItem.styled";

type MovieItemProps = {
	title: string;
	imgUrl: string;
};

const MoviesItem = ({ title, imgUrl }: MovieItemProps) => {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
			<Card>
				<div>
					<img src={imgUrl} alt={title} />
				</div>
				<h4>{title}</h4>
				<StyledMoviesItemControl>
					<p>2023, USA, Detective</p>
					<p>Overall rating: 0/10</p>
					<p>Admin rating: 0/10</p>
				</StyledMoviesItemControl>
			</Card>
		</Grid>
	);
};

export default MoviesItem;
