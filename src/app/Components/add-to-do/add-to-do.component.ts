import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
 
  
  todo: Todo[] = [];
  constructor(){
   this.todo=[
    {sno:1,
    title:"Angular",
    description:"Learn Angular",
    active:true
  },
  {sno:2,
    title:"React",
    description:"Learn React",
    active:true
  },
  {sno:3,
    title:"NodeJs",
    description:"Learn NodeJs",
    active:true
  }
   ]
  }
  deleteTodo(todo:Todo){
    const index=this.todo.indexOf(todo);
    this.todo.splice(index,1);
    console.log(todo)
  }
 addTodo(todo:Todo){
   
    this.todo.push(todo);
    console.log(todo)
  }
  
}
