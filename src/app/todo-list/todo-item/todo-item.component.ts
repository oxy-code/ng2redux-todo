import { Component,Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState,ITodoState } from '../../@store/reducers';
import { toggleTodo,deleteTodo } from '../../@store/actions/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})

export class TodoItemComponent {

	@Input() item:ITodoState;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  toggleCheck(): void {
  	if(this.item.id){
  		this.ngRedux.dispatch(toggleTodo(this.item.id));
  	}
  }

  removeItem(): void {
  	if(this.item.id){
  		this.ngRedux.dispatch(deleteTodo(this.item.id));
  	}
  }
}
