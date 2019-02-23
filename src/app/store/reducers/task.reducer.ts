import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Task } from '../../models/task.model';
import { TaskActionType, TaskAction } from '../actions/task.actions';

export enum TaskFilter {
  ALL,
  COMPLETED,
  TODO
}

export interface TaskState extends EntityState<Task> {
  filter: TaskFilter
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TaskState = adapter.getInitialState({
  filter: TaskFilter.ALL
});

export function taskReducer(state: TaskState = initialState, action: TaskAction): TaskState {
  switch (action.type) {
    case TaskActionType.AddTask:
      return adapter.addOne(action.payload, state);

    case TaskActionType.RemoveTask:
      return adapter.removeOne(action.payload.taskId, state);

    case TaskActionType.SetTasks:
      return adapter.addAll(action.payload, state);

    case TaskActionType.CompleteTask:
      return adapter.updateOne({
        id: action.payload.taskId,
        changes: {
          isDone: true
        }
      }, state);

    case TaskActionType.MarkAsIncompleteTask:
      return adapter.updateOne({
        id: action.payload.taskId,
        changes: {
          isDone: false
        }
      }, state);

    case TaskActionType.SetFilter:
      return {
        ...state,
        filter: action.payload.filter
      }

    case TaskActionType.ClearCompleted:
      const idsToRemove: string[] = (state.ids as string[]).filter((id: string) => {
        return state.entities[id].isDone;
      });
      return adapter.removeMany(idsToRemove, state);

    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
