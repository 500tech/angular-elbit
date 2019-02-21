import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {State} from '../store';
import { Task } from '../models/task.model';
import { selectTasks } from '../store/selectors/task.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  // @Input() tasks: Task[];
  // @Output() deleteTask = new EventEmitter<string>();
  // @Output() toggleTask = new EventEmitter<string>();
  tasks$: Observable<Task[]>;
  constructor(private store: Store<State>) {
    this.tasks$ = store.pipe(
      select(selectTasks),
    )  
  }

  ngOnInit() {
    // console.log(this.tasks);
  }
  ngOnChanges() {
    // console.log('changed', this.tasks);    
  }

  onDeleteTask(taskId: string) {
    // Before NgRx:
    // this.deleteTask.emit(taskId);
  }

  onToggleTask(taskId: string) {
    // Before NgRx:
    // this.toggleTask.emit(taskId);
  }
}