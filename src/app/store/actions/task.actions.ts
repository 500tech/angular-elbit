import { Action } from '@ngrx/store';
import {Task} from '../../models/task.model';
import * as uuid from 'uuid';

export enum TaskActionType {
  AddTask = '[Task] add task',
  RemoveTask = '[Task] remove task'
}

export class AddTaskAction implements Action {
  readonly type = TaskActionType.AddTask;
  payload: Task;
  constructor(data:{title:string}) {
    this.payload = {
      id: uuid.v4(),
      title: data.title,
      isDone: false
    }
  }
}

export class RemoveTaskAction implements Action {
  readonly type = TaskActionType.RemoveTask;
  constructor(public payload: {taskId: string}) {}
}

export type TaskAction = AddTaskAction | RemoveTaskAction;