import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addNewTweet: (state, action) => {
			state.value.push({
				firstname : action.payload.firstname,
				username : action.payload.username,
				profilPicture : action.payload.profilPicture,
				tweetContent : action.payload.tweetContent,
				id : Date.now(), // Unique ID pour chaque tweet
				});
		},
	},
});

export const { addNewTweet } = usersSlice.actions;
export default usersSlice.reducer;
