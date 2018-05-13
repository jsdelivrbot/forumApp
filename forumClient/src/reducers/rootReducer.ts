import { combineReducers } from 'redux';

import { questionReducer } from './questionReducer';
import { IState } from '../types/IState';


export const rootReducer = combineReducers<IState>({
  question: questionReducer
});