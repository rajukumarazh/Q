import { combineReducers } from '@reduxjs/toolkit';
// import ApiDataSlice from './ApiDataSlice';
// import counterSlice from './counterSlice';
import CourseSlice from './CourseSlice';
export const rootslice = combineReducers({
	levelUp: CourseSlice,
});
