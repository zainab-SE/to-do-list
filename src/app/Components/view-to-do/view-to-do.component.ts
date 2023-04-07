import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.component.html',
  styleUrls: ['./view-to-do.component.css']
})

export class ViewToDoComponent {
  constructor(){

  }
  @Input()
  todo: Todo = new Todo;
  @Output() tdDelete: EventEmitter<Todo> = new EventEmitter();
  removeTodo(todo: Todo){
    this.tdDelete.emit(todo);
    console.log("clcik")
  }
}
