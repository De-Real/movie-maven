import React, { useState } from "react";
import { feedbackVariants } from "./animations/movie-details";

import Rating from "@mui/material/Rating";
import {
	StyledMovieRatingFeedback,
	StyledMovieRatingValue,
} from "./styles/MovieLeftTopRating.styled";

const MovieLeftTopRating = () => {
	const [value, setValue] = useState<number>(0);

	const valueChangeHandler = (
		_event: React.SyntheticEvent,
		newValue: number | null
	) => {
		setValue(newValue || 0);
	};

	return (
		<>
			<div>
				<Rating
					name="half-rating-read"
					precision={0.1}
					size="large"
					value={value}
					onChange={valueChangeHandler}
				/>

				{value > 0 && (
					<StyledMovieRatingValue
						variants={feedbackVariants}
						initial="hidden"
						animate="visible"
					>
						{value.toFixed(1)}
					</StyledMovieRatingValue>
				)}
			</div>
			{value > 0 && (
				<StyledMovieRatingFeedback
					variants={feedbackVariants}
					initial="hidden"
					animate="visible"
				>
					Thanks for you feedback!
				</StyledMovieRatingFeedback>
			)}
		</>
	);
};

export default MovieLeftTopRating;
