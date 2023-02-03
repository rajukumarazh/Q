// import { getapirequest } from '../Request/GetApi2';
import { getCourse } from '../requests/CourseRequest';
import { call, put } from 'redux-saga/effects';
// import { fetchApiData, allApiData } from '../../ApiDataSlice';
import { allApiData, fetchApiData } from '../../Toolkit/CourseSlice';

export function* handleCourseApi() {
	try {
		let apiData = yield call(getCourse);
		console.log('courses', apiData);
		yield put(allApiData(apiData.data));
	} catch (e) {
		console.log('error', e);
	} // yield put('counter/receivedApiData', receivedApiData(apiData));
}
