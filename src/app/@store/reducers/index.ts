import { combineReducers } from 'redux';

import { todos, ITodoState } from './todos';
import { visibilityFilter } from './visibilityFilter';


interface IAppState {
	todos: ITodoState[],
	visibilityFilter: string
};

const INITIAL_STATE:IAppState = {
	'todos': [],
	'visibilityFilter': 'SHOW_ALL'
};

const rootReducers = combineReducers<IAppState>({
	todos,
	visibilityFilter
});

export {ITodoState, IAppState, INITIAL_STATE, rootReducers};