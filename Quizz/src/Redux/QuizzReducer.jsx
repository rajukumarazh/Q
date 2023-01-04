import q from '../q.json';
const initialState = {
	QNA: [...q[0].geography],
	Question: q[0],
};

export const QuizzReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CHOOSE_ANSWER':
			return { ...state, questions: payload };

		case 'CHANGE_SUBJECT':
			let dt = Object.keys(state.Question).filter((curr) => {
				if (curr == payload) {
					state.Question[curr];
				}
			});
			return { ...state, dt };

		default:
			return state;
	}
};
