import React from "react";

import Comments from "../MovieComments/Comments";
import NewComment from "../MovieComments/NewComment";

const MovieComments = () => {
	return (
		<>
			<h4>Comments </h4>
			<NewComment />
			<Comments />
		</>
	);
};

export default MovieComments;
