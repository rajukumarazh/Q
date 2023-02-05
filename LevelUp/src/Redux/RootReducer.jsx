import { combineReducers } from 'redux';
import { QuizzReducer } from './QuizzReducer';
import { ApisReducer } from './ApisReducer';

export default combineReducers({
	Quizz: QuizzReducer,
	api: ApisReducer,
});
