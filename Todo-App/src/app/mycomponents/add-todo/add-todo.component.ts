import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title!:string;
  description!: string;
  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter()
  onSubmit(){
    const todo ={
      srno:8,
      title:this.title,
      desc:this.description,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}
