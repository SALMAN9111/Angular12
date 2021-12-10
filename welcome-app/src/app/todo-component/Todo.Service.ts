import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    constructor() {
        console.log("From Service")
     }
     
    getTodos(): String[] {
        return JSON.parse(localStorage.getItem('monoceptTodoItem') || '[]');
    }

    saveTodos(todos:String[]){
        localStorage.setItem('monoceptTodoItem',JSON.stringify(todos));

    }
}