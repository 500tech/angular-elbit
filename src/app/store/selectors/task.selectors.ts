import { State } from '..';
import { Task } from '../../models/task.model';
import { selectAll, selectTotal, TaskState, TaskFilter } from '../reducers/task.reducer';
import { createSelector } from '@ngrx/store';

export const selectTaskState = (state: State): TaskState => state.task;
export const selectTaskFilter = (state: State): TaskFilter => state.task.filter;

export const selectTasks = createSelector<State, TaskState, Task[]>(
  selectTaskState,
  (taskState: TaskState): Task[] => selectAll(taskState)
);

export const selectFilteredTasks = createSelector<State, Task[], TaskFilter, Task[]>(
  selectTasks,
  selectTaskFilter,
  (allTasks: Task[], filter: TaskFilter) => allTasks.filter(task => {
    switch (filter) {
      case TaskFilter.ALL:
        return true;
      case TaskFilter.COMPLETED:
        return task.isDone;
      case TaskFilter.TODO:
        return !task.isDone;
      default:
        return false;
    }
  })
);

export const selectTasksTodoCount = createSelector<State, Task[], number>(
  selectTasks,
  (allTasks: Task[]) => allTasks.filter(task => !task.isDone).length
);

export const selectTasksTotal = (state: State): number => selectTotal(state.task);
export const selectFilteredTasksTotal = createSelector<State, Task[], number>(
  selectFilteredTasks,
  tasks => tasks.length
);
