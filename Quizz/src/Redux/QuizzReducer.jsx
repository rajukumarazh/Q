import q from '../q.json';
const initialState = {
	QNA: [...q[0].geography],
	Question: q[0],
	// selectedSubject:["history"]
};

export const QuizzReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CHOOSE_ANSWER':
			return { ...state, questions: payload };

		case 'CHANGE_SUBJECT':
			let selectedUsers=[payload]
			 return{...state, Question:Object.keys(state.Question)
    .filter(key => selectedUsers.includes(key))
    .reduce((obj, key) => {
        obj[key] = state.Question[key];
        return obj;
  }, {})}

			// return { ...state, Question:filteredUsers,selectedSubject:[...payload]};

		default:
			return state;
	}
};
