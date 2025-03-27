import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: { token: null, username: null, firstname : null },
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
	login : (state, action) => {
			state.value.push({
				firstname : action.payload.firstname,
				username : action.payload.username,
				token : action.payload.token, 
				});
		},
	    logout: (state) => {
			state.value.token = null;
			state.value.username = null;
			state.value.firstname = null;
	}},
});

export const { login , logout } = usersSlice.actions;
export default usersSlice.reducer;
