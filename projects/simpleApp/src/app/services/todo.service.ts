import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url_todo = 'https://jsonplaceholder.typicode.com/todos';
  url_users = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>(this.url_todo, { observe: 'body', responseType: 'json' });
  }

  createToDos(todo: Todo) {
    return this.http.post<Todo>(this.url_todo, todo);
  }

  toggleCompleted(id: number, completed) {
    return this.http.patch(this.url_todo + `/${id}`, { completed })
  }


  deleteToDo(id: number) {
    return this.http.delete(this.url_todo + `/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
