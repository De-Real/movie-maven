import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "../../../components/ui/Card";
import { createMovieLink } from "../utils/createMovieLink";
import { formatMovieType } from "../utils/formatMovieType";
import { StyledMoviesItemControl } from "./styles/MoviesItem.styled";

type MovieItemProps = {
	id: string;
	title: string;
	imgUrl: string;
	type: "films" | "series" | "cartoons";
};

const MoviesItem = ({ title, imgUrl, type, id }: MovieItemProps) => {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
			<Link to={createMovieLink(type, "fiction", id)}>
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
					<p className="type">{formatMovieType(type)}</p>
				</Card>
			</Link>
		</Grid>
	);
};

export default MoviesItem;
