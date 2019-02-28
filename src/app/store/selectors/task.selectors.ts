import { State } from "..";
import { Task } from "../../models/task.model";
import { selectAll, selectTotal } from "../reducers/task.reducer";

export const selectTasks = (state: State): Task[] => {
  return selectAll(state.task);
};

export const selectTasksCount = (state: State): number => {
  return selectTotal(state.task);
};
