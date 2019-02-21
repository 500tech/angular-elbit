import { Action } from '@ngrx/store';

export enum TaskActionType {
  AddTask = '[Task] add task',
  RemoveTask = '[Task] remove task'
}

export class AddTaskAction implements Action {
  readonly type = TaskActionType.AddTask;
  constructor(public payload: {title: string}) {}
}

export class RemoveTaskAction implements Action {
  readonly type = TaskActionType.RemoveTask;
  constructor(public payload: {taskId: string}) {}
}

export type TaskAction = AddTaskAction | RemoveTaskAction;