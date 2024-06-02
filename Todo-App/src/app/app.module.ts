import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { TodoItemComponent } from './mycomponents/todo-item/todo-item.component';
import { AddTodoComponent } from './mycomponents/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentsComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
