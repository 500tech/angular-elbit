import { ActionReducerMap } from "@ngrx/store";
import { TaskState, taskReducer } from "./reducers/task.reducer";
import { AuthState, authReducer } from "./reducers/auth.reducer";

export interface State {
  task: TaskState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  task: taskReducer,
  auth: authReducer
};
