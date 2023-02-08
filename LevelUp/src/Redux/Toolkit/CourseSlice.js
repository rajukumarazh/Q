import { createSlice } from '@reduxjs/toolkit';
let initialState = {
	apiData: [],
	selectedCourse: [],
};
export const CourseSlice = createSlice({
	name: 'CourseSlice',
	initialState,
	reducers: {
		allApiData: (state, action) => {
			state.apiData = action.payload;
			state.sort_course = action.payload;
		},
		fetchApiData: (state, action) => {
			state;
		},
		sortCourse: (state, action) => {
			console.log('stateAction', action.payload);

			state.sort_course = state.apiData.filter((curr) => {
				if (curr.category == action.payload) {
					return curr;
				}
			});
		},
		searchedCourse: (state, action) => {
			console.log('stateAction', action.payload);

			state.sort_course = state.apiData.filter((curr) => {
				if (curr.course_name.toLowerCase() == action.payload.toLowerCase()) {
					return curr;
				}
			});
		},
		selectCourse: (state, action) => {
			state.selectedCourse = action.payload;
		},
	},
});
export const {
	allApiData,
	fetchApiData,
	sortCourse,
	searchedCourse,
	selectCourse,
} = CourseSlice.actions;
export default CourseSlice.reducer;
