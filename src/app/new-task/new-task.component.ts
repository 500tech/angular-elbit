import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { AddTaskAction } from '../store/actions/task.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  public name = '';
  // @Output() addTask = new EventEmitter<string>();
  constructor(private store: Store<State>) {
  }
  onChangeName(e: Event): void {
    this.name = (e.target as HTMLInputElement).value;
  }

  onAddTask() {
    this.store.dispatch(new AddTaskAction({ title: this.name }))
    // this.addTask.emit(this.name);
    this.name = '';
  }
}
