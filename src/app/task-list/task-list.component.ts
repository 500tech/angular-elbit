import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { Task } from '../models/task.model';
import { selectFilteredTasks } from '../store/selectors/task.selectors';
import { RemoveTaskAction, MarkAsIncompleteTaskAction, CompleteTaskAction } from '../store/actions/task.actions';

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
  tasks$: Observable<Task[]> = this.store.pipe(select(selectFilteredTasks));

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    // console.log(this.tasks);
  }
  ngOnChanges() {
    // console.log('changed', this.tasks);    
  }

  onDeleteTask(taskId: string) {
    this.store.dispatch(new RemoveTaskAction({ taskId }));
    // Before NgRx:
    // this.deleteTask.emit(taskId);
  }

  onToggleTask(taskId: string, isDone: boolean) {
    const action = isDone
      ? new MarkAsIncompleteTaskAction({ taskId })
      : new CompleteTaskAction({ taskId });

    this.store.dispatch(action);

    // Before NgRx:
    // this.toggleTask.emit(taskId);
  }
}