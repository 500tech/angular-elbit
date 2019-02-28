import { State } from "..";
import { Task } from "../../models/task.model";
import { selectAll, selectTotal, TaskFilter } from "../reducers/task.reducer";

export const selectTasks = (state: State): Task[] => {
  return selectAll(state.task);
};

export const selectTasksCount = (state: State): number => {
  return selectTotal(state.task);
};

export const selectTasksLeft = (state: State): number => {
  return selectAll(state.task).filter(task => !task.isDone).length;
};

export const selectTaskFilter = (state: State): TaskFilter => state.task.filter;

export const selectFilteredTasks = (state: State): Task[] => {
  const filter = selectTaskFilter(state);
  const allTasks = selectTasks(state);

  return allTasks.filter(task => {
    switch (filter) {
      case TaskFilter.ALL:
        return true;
      case TaskFilter.ACTIVE:
        return !task.isDone;
      case TaskFilter.COMPLETED:
        return task.isDone;
      default:
        throw new Error(`Filter not supported ${filter}`);
    }
  });
};
