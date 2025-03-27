import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		addNewTweet: (state, action) => {
			state.value.push(action.payload);
		},
	},
});

export const { addNewTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
