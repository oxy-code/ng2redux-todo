import { Component,OnInit } from '@angular/core';
import { NgRedux,select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState,ITodoState } from '../@store/reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

	@select('todos') readonly todos$: Observable<ITodoState[]>;
	@select('visibilityFilter') readonly visibilityFilter$: Observable<string>;
	visibleTodos: ITodoState[];

  constructor(private ngRedux:NgRedux<IAppState>) {
  }

  ngOnInit() {
  	this.visibilityFilter$.subscribe(filter => {
  		var state = this.ngRedux.getState();
  		this.visibleTodos = this.getVisibleTodos(state.todos, filter);
  	});
  	this.todos$.subscribe(items => {
  		var state = this.ngRedux.getState();
  		this.visibleTodos = this.getVisibleTodos(items, state.visibilityFilter);
  	});
  }

  protected getVisibleTodos(todos: ITodoState[], filter: string): ITodoState[]{
  	switch (filter) {
			case "SHOW_ALL":
				return todos;
			case "SHOW_ACTIVE":
				return todos.filter(function(item){ return item.completed === false; });
			case "SHOW_COMPLETED":
				return todos.filter(function(item){ return item.completed === true; });
			default:
  			return todos;
		}
  }

}
