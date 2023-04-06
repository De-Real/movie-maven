export type CommentBody = {
	commentId: string;
	userId: string;
	userName: string;
	commentText: string;
	userRating: number;
	date: string;
	likes: number;
};

//Add ts utility here
export type MainCommentBody = CommentBody & { answers: CommentBody[] };
