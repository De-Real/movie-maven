import React, { useState } from "react";
import {
	StyledMovieLeftTopDetails,
	StyledMovieRating,
	StyledMovieRatingFeedback,
	StyledMovieRatingValue,
} from "./styles/MovieLeftTopDetails.styled";

import Rating from "@mui/material/Rating";

import RateReviewIcon from "@mui/icons-material/RateReview";
import FadeTooltip from "../../../../components/ui/FadeTooltip";

const animationVariants = {
	hidden: { opacity: 0, x: 50, y: 20 },
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { type: "spring", duration: 1 },
	},
};

const MovieLeftTopDetails = () => {
	const [value, setValue] = useState<number>(0);

	return (
		<StyledMovieLeftTopDetails>
			<img
				src="data:image/jpeg;base64,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"
				alt="Lalaland movie"
			/>

			<StyledMovieRating>
				<FadeTooltip title="Rate this movie" position="top">
					<p>
						<RateReviewIcon />
						<span>Rate movie:</span>
					</p>
				</FadeTooltip>
				<div>
					<Rating
						name="half-rating-read"
						precision={0.1}
						size="large"
						value={value}
						onChange={(_event, newValue) => {
							setValue(newValue || 0);
						}}
					/>

					{value > 0 && (
						<StyledMovieRatingValue
							variants={animationVariants}
							initial="hidden"
							animate="visible"
						>
							{value.toFixed(1)}
						</StyledMovieRatingValue>
					)}
				</div>
				{value > 0 && (
					<StyledMovieRatingFeedback
						variants={animationVariants}
						initial="hidden"
						animate="visible"
					>
						Thanks for you feedback!
					</StyledMovieRatingFeedback>
				)}
			</StyledMovieRating>
		</StyledMovieLeftTopDetails>
	);
};

export default MovieLeftTopDetails;
