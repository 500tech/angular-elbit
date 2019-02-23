import { Action } from '@ngrx/store';
import { Task } from '../../models/task.model';
import * as uuid from 'uuid';
import { TaskFilter } from '../reducers/task.reducer';

export enum TaskActionType {
  SetTasks = '[Task] set tasks',
  AddTask = '[Task] add task',
  RemoveTask = '[Task] remove task',
  FetchTasks = '[Task] fetch tasks',
  CompleteTask = '[Task] complete task',
  MarkAsIncompleteTask = '[Task] mark task as incomplete',
  SetFilter = '[Task] set filter',
  ClearCompleted = '[Task] clear completed'
}

export class SetTasksAction implements Action {
  readonly type = TaskActionType.SetTasks;
  constructor(public payload: Task[]) { }
}

export class AddTaskAction implements Action {
  readonly type = TaskActionType.AddTask;
  payload: Task;
  constructor(data: { title: string }) {
    this.payload = {
      id: uuid.v4(),
      title: data.title,
      isDone: false
    }
  }
}

export class RemoveTaskAction implements Action {
  readonly type = TaskActionType.RemoveTask;
  constructor(public payload: { taskId: string }) { }
}

export class CompleteTaskAction implements Action {
  readonly type = TaskActionType.CompleteTask;
  constructor(public payload: { taskId: string }) { }
}

export class MarkAsIncompleteTaskAction implements Action {
  readonly type = TaskActionType.MarkAsIncompleteTask;
  constructor(public payload: { taskId: string }) { }
}

export class FetchTasksAction implements Action {
  readonly type = TaskActionType.FetchTasks;
}

export class SetFilterAction implements Action {
  readonly type = TaskActionType.SetFilter;
  constructor(public payload: { filter: TaskFilter }) { }
}

export class ClearCompletedAction implements Action {
  readonly type = TaskActionType.ClearCompleted;
}


export type TaskAction = SetTasksAction | AddTaskAction | RemoveTaskAction | FetchTasksAction | CompleteTaskAction | MarkAsIncompleteTaskAction | SetFilterAction | ClearCompletedAction;