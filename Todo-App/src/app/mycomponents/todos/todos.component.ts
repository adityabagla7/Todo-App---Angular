import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] | undefined;
  constructor(){
    this.todos = [
      {
        srno : 1,
        title : 'title1 here',
        desc : 'desc1 here',
        active : true
      },
      {
        srno : 2,
        title : 'title2 here',
        desc : 'desc2 here',
        active : true
      },
      {
        srno : 3,
        title : 'title3 here',
        desc : 'desc3 here',
        active : true
      },
      {
        srno : 4,
        title : 'title4 here',
        desc : 'desc4 here',
        active : true
      }
    ]
  }
}