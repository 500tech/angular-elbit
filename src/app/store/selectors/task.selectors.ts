import { State } from "..";
import { Task } from "../../models/task.model";

export const selectTasks = (state: State): Task[] => {
  return state.task.data;
};

export const selectTasksCount = (state: State): number => {
  return selectTasks(state).length;
};
