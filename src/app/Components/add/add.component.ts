import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title:string ='';
  description:string ='';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const newtodo=
      {sno:1,
      title:this.title,
      description:this.description,
      active: true}
    
    this.todoAdd.emit(newtodo);
  }
}
