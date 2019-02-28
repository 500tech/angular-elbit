import { Task } from "../../models/task.model";
import { TaskActionType, TaskAction } from "../actions/task.actions";
import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export enum TaskFilter {
  ALL = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed"
}

export interface TaskState extends EntityState<Task> {
  filter: TaskFilter;
}

export const initialState: TaskState = adapter.getInitialState({
  filter: TaskFilter.ALL
});

export function taskReducer(
  state: TaskState = initialState,
  action: TaskAction
): TaskState {
  switch (action.type) {
    case TaskActionType.AddTask:
      return adapter.addOne(action.payload, state);
    case TaskActionType.RemoveTask:
      return adapter.removeOne(action.payload.taskId, state);
    case TaskActionType.CompleteTask:
      return adapter.updateOne(
        {
          id: action.payload.taskId,
          changes: {
            isDone: true
          }
        },
        state
      );
    case TaskActionType.MarkTaskAsIncomplete:
      return adapter.updateOne(
        {
          id: action.payload.taskId,
          changes: {
            isDone: false
          }
        },
        state
      );
    case TaskActionType.SetTasks:
      return adapter.addAll(action.payload, state);

    case TaskActionType.SetTaskFilter:
      return {
        ...state,
        filter: action.payload.taskFilter
      };
    // homework: adapter.removeMany (clear completed)
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
