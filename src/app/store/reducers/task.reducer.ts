import { Task } from "../../models/task.model";
import { TaskActionType, TaskAction } from "../actions/task.actions";
import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export interface TaskState extends EntityState<Task> {}

export const initialState: TaskState = adapter.getInitialState({});

export function taskReducer(
  state: TaskState = initialState,
  action: TaskAction
): TaskState {
  switch (action.type) {
    case TaskActionType.AddTask:
      return adapter.addOne(action.payload, state);
    case TaskActionType.RemoveTask:
      return adapter.removeOne(action.payload.taskId, state);

    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
