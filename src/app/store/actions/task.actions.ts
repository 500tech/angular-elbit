import { Action } from "@ngrx/store";
import { Task } from "../../models/task.model";
import * as uuid from "uuid";
import { TaskFilter } from "../reducers/task.reducer";

export enum TaskActionType {
  AddTask = "[Task] add task",
  RemoveTask = "[Task] remove task",
  CompleteTask = "[Task] complete task",
  MarkTaskAsIncomplete = "[Task] mark task as incomplete",
  SetTaskFilter = "[Task] set filter"
}

export class AddTaskAction implements Action {
  readonly type = TaskActionType.AddTask;
  payload: Task;
  constructor(data: { title: string }) {
    this.payload = {
      id: uuid.v4(),
      title: data.title,
      isDone: false
    };
  }
}

export class RemoveTaskAction implements Action {
  readonly type = TaskActionType.RemoveTask;
  public payload: { taskId: string };
  constructor(payload: { taskId: string }) {
    this.payload = payload;
  }
  //  constructor(public payload: {taskId: string}) // short syntax
}

export class CompleteTaskAction implements Action {
  readonly type = TaskActionType.CompleteTask;
  public payload: { taskId: string };
  constructor(payload: { taskId: string }) {
    this.payload = payload;
  }
}

export class MarkTaskAsIncompleteAction implements Action {
  readonly type = TaskActionType.MarkTaskAsIncomplete;
  public payload: { taskId: string };
  constructor(payload: { taskId: string }) {
    this.payload = payload;
  }
}

export class SetTaskFilterAction implements Action {
  readonly type = TaskActionType.SetTaskFilter;
  public payload: { taskFilter: TaskFilter };
  constructor(payload: { taskFilter: TaskFilter }) {
    this.payload = payload;
  }
}

export type TaskAction =
  | AddTaskAction
  | RemoveTaskAction
  | CompleteTaskAction
  | MarkTaskAsIncompleteAction
  | SetTaskFilterAction;
