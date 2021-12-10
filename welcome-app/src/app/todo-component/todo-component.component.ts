import { Component, OnInit } from '@angular/core';
import { TodoService } from './Todo.Service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  currentItem: String
  todos: String[]

  constructor(private todoService: TodoService) {
    console.log("Todo Component created")
    this.currentItem = "";
    this.todos = []
  }

  handleAddClick(e: any) {
    console.log(this.currentItem);
    this.todos.push(this.currentItem);
    console.log(this.todos);
    this.todoService.saveTodos(this.todos);
  }

  onDelete(indexId: any) {
    if(confirm("Do you want delete this todo")){
      this.todos.splice(indexId,1);
    }
    this.todoService.saveTodos(this.todos)
  }

  ngOnInit(): void {
    console.log("Inside ngOnInit")
    this.todos = this.todoService.getTodos();
  }

}
