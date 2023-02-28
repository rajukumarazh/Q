import { combineReducers } from '@reduxjs/toolkit';
import QuizzSlice from './QuizzSlice';
import CourseSlice from './CourseSlice';
export const rootslice = combineReducers({
	levelUp: CourseSlice,
	levelUpQuizz: QuizzSlice,
});
