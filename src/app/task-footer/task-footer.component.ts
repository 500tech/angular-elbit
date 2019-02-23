import { Component, OnInit } from '@angular/core';
import { TaskFilter } from '../store/reducers/task.reducer';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { SetFilterAction, ClearCompletedAction } from '../store/actions/task.actions';
import { Observable } from 'rxjs';
import { selectTaskFilter, selectTasksTodoCount } from '../store/selectors/task.selectors';

@Component({
  selector: 'app-task-footer',
  templateUrl: './task-footer.component.html',
  styleUrls: ['./task-footer.component.css']
})
export class TaskFooterComponent implements OnInit {
  TaskFilter = TaskFilter;
  filter$: Observable<TaskFilter> = this.store.pipe(select(selectTaskFilter));
  tasksLeft$: Observable<TaskFilter> = this.store.pipe(select(selectTasksTodoCount));

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }
  setFilter(filter: TaskFilter) {
    this.store.dispatch(new SetFilterAction({ filter }));
  }
  clear() {
    this.store.dispatch(new ClearCompletedAction());
  }
}
