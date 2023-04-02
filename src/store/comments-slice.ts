import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { CommentBody, MainCommentBody } from "../types/comments";

type AnswerCommentType = {
	headId: string;
	body: CommentBody;
};

type CommentLikes = {
	id: string;
	action: "decrement" | "increment";
};

interface CommentsState {
	comments: MainCommentBody[];
}

const initialState: CommentsState = {
	comments: [],
};

const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		//Method to set local copy of comments when new movie details is loaded
		setComments: (state, { payload }: PayloadAction<MainCommentBody[]>) => {
			state.comments = payload;
		},
		//Method to add answer to the comment
		addAnswerComment: (
			state,
			{ payload }: PayloadAction<AnswerCommentType>
		) => {
			const foundComment = state.comments.find(
				(comment) => comment.commentId === payload.headId
			);

			if (foundComment) {
				foundComment.answers.push(payload.body);
			}
		},
		//Method to add comment
		addMainComment: (state, { payload }: PayloadAction<MainCommentBody>) => {
			state.comments.push(payload);
		},
		//Method to set whether particular comment is liked or isn't
		manageCommentLike: (state, { payload }: PayloadAction<CommentLikes>) => {
			let foundComment: CommentBody | MainCommentBody | undefined;

			//Find comment with liking id
			foundComment = state.comments.find(
				(comment) => comment.commentId === payload.id
			);

			//Check wrapped comments to find liking id
			if (!foundComment) {
				state.comments.forEach((mainComment) => {
					const temp = mainComment.answers.find(
						(answer) => answer.commentId === payload.id
					);

					if (temp) {
						foundComment = temp;
					}
				});
			}

			if (foundComment) {
				if (payload.action === "decrement") {
					foundComment.likes -= 1;
				} else if (payload.action === "increment") {
					foundComment.likes += 1;
				}
			}
		},
	},
});

export const {
	setComments,
	addAnswerComment,
	addMainComment,
	manageCommentLike,
} = commentsSlice.actions;

export const selectComments = (state: RootState) => state.comments.comments;

export default commentsSlice.reducer;
