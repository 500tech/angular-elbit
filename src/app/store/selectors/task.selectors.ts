import {State} from '..';
import { Task } from '../../models/task.model';

export const selectTasks = (state: State): Task[] => state.task.data;