import axios from 'axios';
export function getQuizzTrivia() {
	return axios.request({
		method: 'get',
		url: 'http://localhost:8000/getrelate',
	});
}
