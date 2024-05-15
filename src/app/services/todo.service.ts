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


}
