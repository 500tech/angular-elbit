import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Task } from './task.model';
import { TaskActions, TaskActionTypes } from './task.actions';

export interface State extends EntityState<Task> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: TaskActions
): State {
  switch (action.type) {
    case TaskActionTypes.AddTask: {
      return adapter.addOne(action.payload.task, state);
    }

    case TaskActionTypes.UpsertTask: {
      return adapter.upsertOne(action.payload.task, state);
    }

    case TaskActionTypes.AddTasks: {
      return adapter.addMany(action.payload.tasks, state);
    }

    case TaskActionTypes.UpsertTasks: {
      return adapter.upsertMany(action.payload.tasks, state);
    }

    case TaskActionTypes.UpdateTask: {
      return adapter.updateOne(action.payload.task, state);
    }

    case TaskActionTypes.UpdateTasks: {
      return adapter.updateMany(action.payload.tasks, state);
    }

    case TaskActionTypes.DeleteTask: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TaskActionTypes.DeleteTasks: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TaskActionTypes.LoadTasks: {
      return adapter.addAll(action.payload.tasks, state);
    }

    case TaskActionTypes.ClearTasks: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
