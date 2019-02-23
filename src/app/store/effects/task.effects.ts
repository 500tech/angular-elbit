import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TaskActionType, SetTasksAction } from '../actions/task.actions';
import { switchMap, map } from 'rxjs/operators';
import { Task } from 'src/app/models/task.model';
import { ApiService } from 'src/app/api.service';

const transformTask = task => ({
  title: task.title,
  id: task.id,
  isDone: task.completed
});

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private api: ApiService) { }

  @Effect()
  loadTasks$ = this.actions$.pipe(
    ofType(TaskActionType.FetchTasks),
    switchMap((task: Task) => this.api.fetchTasks()),
    map((tasks: Task[]) => new SetTasksAction(tasks.slice(0, 10).map(transformTask)))
  )
}
