import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import exampleReducer from "./example-slice";
import commentsReducer from "./comments-slice";

export const store = configureStore({
	reducer: {
		example: exampleReducer,
		comments: commentsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
