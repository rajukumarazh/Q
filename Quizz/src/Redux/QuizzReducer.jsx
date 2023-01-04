import q from '../q.json';
const initialState = {
	answer: q[0].geography,
	dt: [],
};

export const QuizzReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CHOOSE_ANSWER':
			let dt = state?.answer?.map((curr) => {
				if (curr.id == payload.id) {
					return { ...curr, choosenAns: payload.choosenAnsw };
				} else {
					return { ...state };
				}
			});

			return dt;

		case 'ALL_QUESTION':
			return state;
		default:
			return state;
	}
};
