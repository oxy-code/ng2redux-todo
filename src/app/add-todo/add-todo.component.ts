import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState, ITodoState } from '../@store/reducers';
import { addTodo, setVisibilityFilter, toggleAllTodo } from '../@store/actions/todo.action';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {

  isTodosExist: boolean = false;
  @select('todos') readonly todos$: Observable<ITodoState[]>

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
    this.todos$.subscribe(items => {
      this.isTodosExist = items.length > 0
    });
  }

  addItem(title: String): void {
  	if(title.length){
      this.ngRedux.dispatch(addTodo(title));
  		this.ngRedux.dispatch(setVisibilityFilter('SHOW_ALL'));
  	}
  }

  toggleAllCheck(): void{
    this.ngRedux.dispatch(toggleAllTodo());
  }

}
