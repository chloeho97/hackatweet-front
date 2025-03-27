import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const likedTweetSlice = createSlice({
	name: 'likedTweet',
	initialState,
	reducers: {
		likedTweet: (state, action) => {
			const isAlreadyLiked = state.value.some((tweet) => tweet.id === action.payload.id);
	  
			if (isAlreadyLiked) {
			  state.value = state.value.filter((tweet) => tweet.id !== action.payload.id);
			} else {
			  // Ajoute le tweet liké
			  state.value.push({ id: action.payload.id });
			}
		  },
		},
	  });

export const { likedTweet } = likedTweetSlice.actions;
export default likedTweetSlice.reducer;
