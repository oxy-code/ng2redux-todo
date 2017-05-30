import { Component, OnInit } from '@angular/core';
import { NgRedux,select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from '../@store/reducers';
import { ITodoState } from '../@store/reducers/todos';
import { clearCompletedTodo } from '../@store/actions/todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.sass']
})
export class TodoFooterComponent implements OnInit {

	@select('todos') readonly todos$: Observable<ITodoState[]>;
	allCount: number = 0;
	activeCount: number = 0;
	completedCount: number = 0;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  	this.todos$.subscribe(items => {
  		this.activeCount = items.filter(i => {return i.completed === false}).length;
  		this.completedCount = items.filter(i => {return i.completed === true}).length;
  	});
  }

  clearCompletedTodos():void{
  	this.ngRedux.dispatch(clearCompletedTodo());
  }

}
