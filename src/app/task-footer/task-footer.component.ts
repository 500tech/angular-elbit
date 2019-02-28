import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "../store";
import { Observable } from "rxjs";
import {
  selectTasksLeft,
  selectTaskFilter
} from "../store/selectors/task.selectors";
import { TaskFilter } from "../store/reducers/task.reducer";
import { SetTaskFilterAction } from "../store/actions/task.actions";

@Component({
  selector: "app-task-footer",
  templateUrl: "./task-footer.component.html",
  styleUrls: ["./task-footer.component.css"]
})
export class TaskFooterComponent implements OnInit {
  tasksLeft$: Observable<number> = this.store.pipe(select(selectTasksLeft));
  taskFilter$: Observable<TaskFilter> = this.store.pipe(
    select(selectTaskFilter)
  );
  filterTypes = [TaskFilter.ALL, TaskFilter.ACTIVE, TaskFilter.COMPLETED];

  constructor(private store: Store<State>) {}

  ngOnInit() {}
  onSetFilter(filter: TaskFilter) {
    this.store.dispatch(
      new SetTaskFilterAction({
        taskFilter: filter
      })
    );
  }
}
