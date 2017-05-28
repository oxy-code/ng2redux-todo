import { combineReducers } from 'redux';

import { todos, ITodoState } from './todos';
import { visibilityFilter } from './visibilityFilter';

export interface IAppState {
	todos: ITodoState[],
	visibilityFilter: string
};

export const INITIAL_STATE:IAppState = {
	'todos': [],
	'visibilityFilter': ''
};

const allReducers = Object.assign({}, todos,visibilityFilter);
export const rootReducers = combineReducers(allReducers);