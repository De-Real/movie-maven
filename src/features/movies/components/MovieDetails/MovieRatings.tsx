import {
	StyledMovieRatingItem,
	StyledMovieRatings,
} from "./styles/MovieRatings.styled";

import Rating from "@mui/material/Rating";

import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FadeTooltip from "../../../../components/ui/FadeTooltip";

const MovieRatings = () => {
	return (
		<StyledMovieRatings>
			<span>Ratings: </span>
			<FadeTooltip title="Rating by administrators">
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
			</FadeTooltip>

			<FadeTooltip title="Rating by users">
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
			</FadeTooltip>
		</StyledMovieRatings>
	);
};

export default MovieRatings;
