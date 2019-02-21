import {Task} from '../../models/task.model';
import {TaskActionType, TaskAction} from '../actions/task.actions';

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
        data: [...state.data, action.payload]
      }
    default: 
      return state;
  }
}