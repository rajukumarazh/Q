import { configureStore } from '@reduxjs/toolkit';

// import { watcherSaga } from './Saga/rootSaga';
import { applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
// import { rootRedu } from './rootReducer';
import { rootslice } from './rootSlice';
import { watcherSaga } from '../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootslice,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
	},
});
sagaMiddleware.run(watcherSaga);
