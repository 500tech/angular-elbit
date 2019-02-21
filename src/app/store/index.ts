import {
  ActionReducerMap
} from '@ngrx/store';
import { TaskState, taskReducer } from './reducers/task.reducer';


export interface State {
  task: TaskState
}

export const reducers: ActionReducerMap<State> = {
  task: taskReducer
};
