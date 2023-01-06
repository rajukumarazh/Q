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
export const HandleMarks = (data) => {
	console.log('MarksAction', data);
	return {
		type: 'HANDLE_MARKS',
		payload: data,
	};
};
export const submitted = (data) => {
	console.log('submit_binary', data);
	return {
		type: 'SUBMIT',
		payload: data,
	};
};
export default { chooseAnswer, chooseSubject, submitted };
