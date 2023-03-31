export type CommentBody = {
	commentId: string;
	userId: string;
	userName: string;
	commentText: string;
	userRating: number;
	date: string;
};

export type MainCommentBody = CommentBody & { answers: CommentBody[] };
