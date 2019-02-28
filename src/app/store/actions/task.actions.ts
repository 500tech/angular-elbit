import { Action } from "@ngrx/store";
import { Task } from "../../models/task.model";
import * as uuid from "uuid";
import { TaskFilter } from "../reducers/task.reducer";

export enum TaskActionType {
  SetTasks = "[Task] set tasks",
  AddTask = "[Task] add task",
  RemoveTask = "[Task] remove task",
  FetchTasks = "[Task] fetch tasks",
  CompleteTask = "[Task] complete task",
  MarkTaskAsIncomplete = "[Task] mark task as incomplete",
  SetTaskFilter = "[Task] set filter"
  // homework ClearCompleted
}

export class SetTasksAction implements Action {
  readonly type = TaskActionType.SetTasks;
  constructor(public payload: Task[]) {}
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
  constructor(public payload: { taskId: string }) {}
}

export class MarkTaskAsIncompleteAction implements Action {
  readonly type = TaskActionType.MarkTaskAsIncomplete;
  constructor(public payload: { taskId: string }) {}
}

export class FetchTasksAction implements Action {
  readonly type = TaskActionType.FetchTasks;
}

export class SetTaskFilterAction implements Action {
  readonly type = TaskActionType.SetTaskFilter;
  public payload: { taskFilter: TaskFilter };
  constructor(payload: { taskFilter: TaskFilter }) {
    this.payload = payload;
  }
}

export type TaskAction =
  | SetTasksAction
  | AddTaskAction
  | RemoveTaskAction
  | FetchTasksAction
  | CompleteTaskAction
  | MarkTaskAsIncompleteAction
  | SetTaskFilterAction;
