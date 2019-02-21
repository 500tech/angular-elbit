import {Task} from '../../models/task.model';
import {TaskActionType, TaskAction} from '../actions/task.actions';
import * as uuid from 'uuid';

export interface TaskState {
  data: Task[]
}

export const initialState:TaskState = {
  data: []
}

export function taskReducer(state: TaskState = initialState, action: TaskAction):TaskState {
  switch(action.type) {
    case TaskActionType.AddTask:
      return {
        ...state,
        data: [...state.data, {
          id: uuid.v4(),
          title: action.payload.title,
          isDone: false
        }]
      }
    default: 
      return state;
  }
}