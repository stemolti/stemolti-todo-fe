import { Component, OnInit } from '@angular/core';
import { Todo } from '../../entities/todo.entity';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrl: './todo-dashboard.component.css'
})
export class TodoDashboardComponent implements OnInit {
  todos: Todo[] = [];
  completed: boolean = false;
  newTodo: Todo = { title: '', dueDate: '', completed: false };

  constructor(private todoService: TodoService) {}

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnInit() {
    this.getTodos();
  }

  expand(){
    console.log("ok")
  }

  collapse(){
    console.log('col')
  }
}
