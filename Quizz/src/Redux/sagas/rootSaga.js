import { takeLatest, takeEvery } from 'redux-saga/effects';
// import { handleapi } from './Handler/HandleGetApi';
// import { handleapi2 } from './Handler/HandleGetApi2';
import { handleCourseApi } from './handlers/HandleCourse';
import { all, fork } from 'redux-saga/effects';
export function* watcherSaga() {
	// yield takeLatest(GET_USER, handleGetUser);
	// yield takeLatest(GET_TODO, manageTodos);
	// yield takeEvery('counter/calling', handleapi);
	// yield takeLatest('apilice/fetchApiData', handleapi2);
	yield all([fork(handleCourseApi)]);
}
