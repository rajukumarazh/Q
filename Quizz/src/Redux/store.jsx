import { createStore } from 'redux';
import { QuizzReducer } from './QuizzReducer';
import { combineReducers } from 'redux';
export const store = createStore(QuizzReducer);
