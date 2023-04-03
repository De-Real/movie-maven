import { CommentResponseBody } from "../types/comments";

type UserType = {
	id: string;
	name: string;
	rating: number;
};

export const formCommentAnswerBody = (
	comment: CommentResponseBody,
	user: UserType
) => {
	return {
		commentText: comment.text,
		commentId: String(Math.random()), //Should form normal id
		userId: user.id, //Should be taken from global state
		userName: comment.anonymous ? "Anonymous" : user.name, //Should be taken from global state
		userRating: user.rating, //Should be taken from films details
		date: new Date().toLocaleDateString(),
		likes: 0,
	};
};
