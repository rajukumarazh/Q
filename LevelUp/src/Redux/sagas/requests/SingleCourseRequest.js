import axios from 'axios';
export function getAllSubject() {
	return axios.request({
		method: 'get',
		url: 'http://localhost:8000/js',
	});
}
