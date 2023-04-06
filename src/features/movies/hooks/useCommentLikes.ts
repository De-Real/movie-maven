import { useState } from "react";

const useCommentLikes = () => {
	const [isLiked, setIsLiked] = useState(false);

	const toggleLikesHandler = () => {
		setIsLiked((currentState) => !currentState);
	};

	return {
		isLiked,
		toggleLikesHandler,
	};
};

export default useCommentLikes;
