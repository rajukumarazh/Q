export const chooseAnswer = (data) => {
	console.log('actionData', data);
	return {
		type: 'CHOOSE_ANSWER',
		payload: data,
	};
};
export default { chooseAnswer };
