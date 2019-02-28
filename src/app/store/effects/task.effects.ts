import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { TaskActionType, SetTasksAction } from "../actions/task.actions";
import { switchMap, map, tap } from "rxjs/operators";
import { ApiService } from "src/app/api.service";
import { Task } from "src/app/models/task.model";

const transformTask = task => ({
  title: task.title,
  id: task.id,
  isDone: task.completed
});

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private api: ApiService) {}

  @Effect()
  loadTasks$ = this.actions$.pipe(
    ofType(TaskActionType.FetchTasks),
    // debounceTime(200),
    switchMap(() => this.api.fetchTasks()),
    tap(data => console.log("data from switchMap", data)),
    map(
      (tasks: Task[]) =>
        new SetTasksAction(tasks.slice(0, 10).map(transformTask))
    )
  );
}
