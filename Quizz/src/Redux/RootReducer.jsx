import { combineReducers } from 'redux';
import { QuizzReducer } from './QuizzReducer';

export default combineReducers({
	Quizz: QuizzReducer,
});
