import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../@store/reducers';
import { addTodo } from '../@store/actions/todo.action';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {

  constructor(private ngRedux:NgRedux<IAppState>) { }

  ngOnInit() {
  }

  addItem(title: String): void {
  	if(title.length){
  		this.ngRedux.dispatch(addTodo(title));
  	}
  }

}
