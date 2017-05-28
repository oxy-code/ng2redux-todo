import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule,NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { IAppState,INITIAL_STATE,rootReducers } from './@store/reducers';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(rootReducers,INITIAL_STATE)
  }
}
