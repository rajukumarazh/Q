import { createSlice } from '@reduxjs/toolkit';

import q from '../../q.json';
const initialState = {
	QNA: [...q[0].geography],
	Question: q[0],
	TotalMarks: '',
	isSubmitted: false,
};
export const QuizzSlice = createSlice({
	name: 'QuizzSlice',
	initialState,
	reducers: {
		data: [],
		// allApiData: (state, action) => {
		// 	state.apiData = action.payload;
		// 	state.sort_course = action.payload;
		// },
		// fetchApiData: (state, action) => {
		// 	state;
		// },
		// sortCourse: (state, action) => {
		// 	console.log('stateAction', action.payload);

		// 	state.sort_course = state.apiData.filter((curr) => {
		// 		if (curr.category == action.payload) {
		// 			return curr;
		// 		}
		// 	});
		// },
		chooseAnswer: (state, action) => {
			console.log('actionData', action.payload);
			state.QNA = action.payload;
		},
		//   chooseSubject : (state,action) => {
		//         console.log('selectedSubject', action.payload);
		//         let dt = Object.keys(state.Question).filter((curr) => {
		// 			if (curr == payload) {
		// 				state.Question[curr];
		// 			}
		// 		});
		//     },
		HandleMarks: (state, action) => {
			console.log('MarksAction', action.payload);
			state.TotalMarks = action.payload;
		},
		submitted: (state, action) => {
			console.log('submit_binary', action.payload);
			state.isSubmitted = !state.isSubmitted;
		},
		setApidata: (state, action) => {
			console.log('dataRecieve', action.payload);
		},
	},
});
export const { setApidata, submitted, HandleMarks, chooseAnswer } =
	QuizzSlice.actions;
export default QuizzSlice.reducer;
