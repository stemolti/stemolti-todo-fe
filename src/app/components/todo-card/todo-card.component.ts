import { Component, Input } from '@angular/core';
import { Todo } from '../../entities/todo.entity';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input() todo!: Todo;

}
