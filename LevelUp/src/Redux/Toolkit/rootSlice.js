import { combineReducers } from '@reduxjs/toolkit';

import CourseSlice from './CourseSlice';
export const rootslice = combineReducers({
	levelUp: CourseSlice,
});
