import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		addNewTweet: (state, action) => {
			state.value.push({
				firstname : action.payload.firstname,
				username : action.payload.username,
				tweetContent : action.payload.tweetContent,
				token : action.payload.token,
				id : Date.now(), // Unique ID pour chaque tweet
				});
		},
		removeTweet: (state, action) => {
			state.value = state.value.filter(
				tweet => !(tweet.id === action.payload.id && tweet.token === action.payload.token)
			);
		}
	},
});

export const { addNewTweet, removeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
