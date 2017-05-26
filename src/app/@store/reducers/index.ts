//import { combineReducers } from 'redux';

import { todos, ITodoState } from './todos';
//import { visibilityFilter } from './visibilityFilter';

export interface IAppState {
	todos: ITodoState[],
	visibilityFilter: string
}

/*const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export {todoApp as rootReducers}*/
