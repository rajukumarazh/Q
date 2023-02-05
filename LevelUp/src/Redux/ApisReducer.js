let initialState = { todo: [] };

export const ApisReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'API_CALL':
			return {
				...state,
			};
		default:
			return state;
	}
};
