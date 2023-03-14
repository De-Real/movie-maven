import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface NewsState {
	value: string;
}

const initialState: NewsState = {
	value: "Hello world!",
};

const exampleSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		changeExampleValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { changeExampleValue } = exampleSlice.actions;

export const selectExampleValue = (state: RootState) => state.example.value;

export default exampleSlice.reducer;
