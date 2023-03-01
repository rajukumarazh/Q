import { createSlice } from '@reduxjs/toolkit';
let initialState = {
	apiData: [],
	selectedCourse: [],
	current_user: [],
	enrolled_courses: [],
	learning_status: false,
	current_course: [],
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
		add_user: (state, action) => {
			// console.log('add_user', action.payload);
			state.current_user = action.payload;
		},
		curr_user_course: (state, action) => {
			// console.log('add_user', action.payload);
			state.enrolled_courses = action.payload;
		},
		changeLearnginStatus: (state, action) => {
			state.learning_status = !state.learning_status;
		},
		handleCurrentCourse: (state, action) => {
			state.current_course = action.payload;
		},
	},
});
export const {
	allApiData,
	fetchApiData,
	sortCourse,
	searchedCourse,
	selectCourse,
	add_user,
	curr_user_course,
	changeLearnginStatus,
	handleCurrentCourse,
} = CourseSlice.actions;
export default CourseSlice.reducer;
