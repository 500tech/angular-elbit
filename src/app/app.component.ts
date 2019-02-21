import { Component } from '@angular/core';
import {interval, Observable, fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
// import * as uuid from 'uuid';

import { Task } from './models/task.model';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  now = new Date();
  curSec$:Observable<number> = interval(1000);
  isBelow$:Observable<boolean> =
    fromEvent<MouseEvent>(document.body, 'mousemove').pipe(
      debounceTime(200),
      map((evt: MouseEvent) => evt.clientY > 100)
    );

  // Before NgRx:

  // tasks: Task[] = [
  //   {id: '1', title: 'Buy Milk', isDone: true},
  //   {id: '2', title: 'Go Home', isDone: false}
  // ];


  // constructor(private api: ApiService) {

  // }

  // ngOnInit() {
  //   this.tasks$ = this.api.fetchTasks();
  // }

  // onAddTask(title: string) {
  //   this.tasks = [...this.tasks, {
  //     id: uuid.v4(),
  //     title: title,
  //     isDone: false
  //   }];
  // }

  // onDeleteTask(taskId: string) {
  //   this.tasks = this.tasks.filter(
  //     (task) => task.id !== taskId
  //   );
  // }

  // onToggleTask(taskId: string) {
  //   this.tasks = this.tasks.map((task: Task):Task => {
  //     if (task.id !== taskId) {
  //       return task;
  //     } else {
  //       return {
  //         ...task,
  //         isDone: !task.isDone
  //       };
  //     }
  //   });
  // }
}
