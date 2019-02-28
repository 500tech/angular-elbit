import { State } from "..";
import { Task } from "../../models/task.model";
import { selectAll } from "../reducers/task.reducer";
import { selectTotal } from "src/app/task.reducer";

export const selectTasks = (state: State): Task[] => {
  return selectAll(state.task);
};

export const selectTasksCount = (state: State): number => {
  return selectTotal(state.task);
};
