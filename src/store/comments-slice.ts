import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { CommentBody, MainCommentBody } from "../types/comments";

type AnswerCommentType = {
	headId: string;
	body: CommentBody;
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
		setComments: (state, { payload }: PayloadAction<MainCommentBody[]>) => {
			state.comments = payload;
		},

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
		addMainComment: (state, { payload }: PayloadAction<MainCommentBody>) => {
			state.comments.push(payload);
		},
	},
});

export const { setComments, addAnswerComment, addMainComment } =
	commentsSlice.actions;

export const selectComments = (state: RootState) => state.comments.comments;

export default commentsSlice.reducer;
