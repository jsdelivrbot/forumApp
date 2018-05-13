import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { IState } from '../types/IState';
import { rootReducer } from '../reducers/rootReducer';
import { questionReducer } from '../reducers/questionReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Array<any> = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export const store: Store<IState> = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);