import { Component,OnInit } from '@angular/core';
import { NgRedux,select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from '../@store/reducers';
import { ITodoState } from '../@store/reducers/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

	@select('todos') readonly todos$: Observable<ITodoState[]>

  constructor(private ngRedux:NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

}
