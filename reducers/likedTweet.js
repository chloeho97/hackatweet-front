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
			  // si déjà liké, dé-liker le tweet au clic sur le coeur
			if (isAlreadyLiked) {
			  state.value = state.value.filter((tweet) => tweet.id !== action.payload.id);
			} else {
			  // Ajoute le tweet liké au clic sur le coeur
			  state.value.push({ id: action.payload.id });
			}
		  },
		},
	  });

export const { likedTweet } = likedTweetSlice.actions;
export default likedTweetSlice.reducer;
