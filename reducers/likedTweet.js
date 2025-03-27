import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const likedTweetSlice = createSlice({
	name: 'likedTweet',
	initialState,
	reducers: {
		likedTweet: (state, action) => {
			state.value.push({
				id : action.payload.id,
				});
		},
	},
});

export const { likedTweet } = likedTweetSlice.actions;
export default likedTweetSlice.reducer;
