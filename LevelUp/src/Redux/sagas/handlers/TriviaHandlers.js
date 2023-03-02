import { getQuizzTrivia } from '../requests/TriviaRequest';
import { call, put } from 'redux-saga/effects';

// import { allApiData, fetchApiData } from '../../Toolkit/CourseSlice';
import { enrolledCourseTrivia } from '../../Toolkit/QuizzSlice';
export function* handleQuizzTrivia() {
	try {
		let QuizzapiData = yield call(getQuizzTrivia);
		console.log('EnrolledQuizzesTrivia', QuizzapiData);
		yield put(enrolledCourseTrivia(QuizzapiData.data));
	} catch (e) {
		console.log('error', e);
	} // yield put('counter/receivedApiData', receivedApiData(apiData));
}
