import { StyledMovieRatings } from "./styles/MovieRatings.styled";

import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ReadonlyRating from "../../../../components/ui/ReadonlyRating";

const MovieRatings = () => {
	return (
		<StyledMovieRatings>
			<span>Ratings: </span>
			<ReadonlyRating
				icon={<AdminPanelSettingsIcon />}
				title="Rating by administators"
				ratingValue={4.54}
			/>
			<ReadonlyRating
				icon={<PersonIcon />}
				title="Rating by users"
				ratingValue={4.9}
			/>
		</StyledMovieRatings>
	);
};

export default MovieRatings;
