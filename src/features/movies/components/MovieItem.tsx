import { Grid } from "@mui/material";
import styled from "styled-components";
import { StyledMovieItem } from "./styles/MovieItem.styled";

type MovieItemProps = {
	title: string;
};

const MovieItem = ({ title }: MovieItemProps) => {
	return (
		// <StyledMovieItem item xs={2} sm={3}>
		// 	{title}
		// </StyledMovieItem>
		<Grid item xs={6} sm={4} md={3} lg={2}>
			<StyledMovieItem>{title}</StyledMovieItem>
		</Grid>
	);
};

export default MovieItem;
