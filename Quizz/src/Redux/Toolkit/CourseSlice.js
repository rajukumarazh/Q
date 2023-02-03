import { createSlice } from '@reduxjs/toolkit';
let initialState = {
	apiData: [],
};
export const CourseSlice = createSlice({
	name: 'CourseSlice',
	initialState,
	reducers: {
		allApiData: (state, action) => {
			state.apiData = action.payload;
		},
		fetchApiData: (state, action) => {
			state;
		},
	},
});
export const { allApiData, fetchApiData } = CourseSlice.actions;
export default CourseSlice.reducer;
