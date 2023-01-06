import q from '../q.json';
const initialState = {
	QNA: [...q[0].geography],
	Question: q[0],
	TotalMarks: '',
	isSubmitted: false,
};

export const QuizzReducer = (state = initialState, { type, payload }) => {
	console.log('payloadMarks', payload);
	switch (type) {
		case 'CHOOSE_ANSWER':
			return { ...state, QNA: payload };

		case 'CHANGE_SUBJECT':
			let dt = Object.keys(state.Question).filter((curr) => {
				if (curr == payload) {
					state.Question[curr];
				}
			});
			return { ...state, dt };
		case 'HANDLE_MARKS':
			return { ...state, TotalMarks: payload.length };
		case 'SUBMIT':
			return { ...state, isSubmitted: !state.isSubmitted };
		default:
			return state;
	}
};
