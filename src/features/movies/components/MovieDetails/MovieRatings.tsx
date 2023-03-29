import {
	StyledMovieRatingItem,
	StyledMovieRatings,
} from "./styles/MovieRatings.styled";

import Rating from "@mui/material/Rating";

import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const MovieRatings = () => {
	return (
		<StyledMovieRatings>
			<span>Ratings: </span>
			<Tooltip
				title="Rating by administrators"
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
			>
				<StyledMovieRatingItem>
					<AdminPanelSettingsIcon />
					<Rating
						name="half-rating-read"
						defaultValue={4.34}
						precision={0.1}
						readOnly
					/>
					<span>{(4.34).toFixed(2)}</span>
				</StyledMovieRatingItem>
			</Tooltip>

			<Tooltip
				title="Rating by users"
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 600 }}
			>
				<StyledMovieRatingItem>
					<PersonIcon />
					<Rating
						name="half-rating-read"
						defaultValue={4.6}
						precision={0.1}
						readOnly
					/>
					<span>{(4.6).toFixed(2)}</span>
				</StyledMovieRatingItem>
			</Tooltip>
		</StyledMovieRatings>
	);
};

export default MovieRatings;
