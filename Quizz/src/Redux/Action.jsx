export const chooseAnswer = (data) => {
	console.log('actionData', data);
	return {
		type: 'CHOOSE_ANSWER',
		payload: data,
	};
};
export const chooseSubject = (data) => {
	console.log('selectedSubject', data);
	return {
		type: 'CHANGE_SUBJECT',
		payload: data,
	};
};
export default { chooseAnswer, chooseSubject };
