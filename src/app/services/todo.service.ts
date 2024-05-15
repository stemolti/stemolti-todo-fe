import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../entities/todo.entity';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = '/api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl, {});
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, newTodo);
  }

  checked(id: string): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${id}/check`, {});
  }

  notChecked(id: string): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${id}/uncheck`, {});
  }
}
