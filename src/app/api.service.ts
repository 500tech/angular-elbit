import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './models/task.model';

// interface ServerData {
//   id: string;
//   title: string;
// }

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchTasks() {
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
