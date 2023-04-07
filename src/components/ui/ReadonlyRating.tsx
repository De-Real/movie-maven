import React from "react";
import FadeTooltip from "./FadeTooltip";
import { StyledReadonlyRating } from "./styles/ReadonlyRating.styled";

import Rating from "@mui/material/Rating";

type ReadonlyRatingProps = {
	icon: React.ReactNode;
	title: string;
	ratingValue: number;
};

const ReadonlyRating = ({ icon, title, ratingValue }: ReadonlyRatingProps) => {
	return (
		<FadeTooltip title={title}>
			<StyledReadonlyRating>
				{icon}
				<Rating
					name="half-rating-read"
					defaultValue={ratingValue}
					precision={0.1}
					readOnly
				/>
				<span>{ratingValue.toFixed(2)}</span>
			</StyledReadonlyRating>
		</FadeTooltip>
	);
};

export default ReadonlyRating;
