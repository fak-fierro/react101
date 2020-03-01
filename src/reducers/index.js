import { combineReducers } from "redux";
import { fetchTaskReducer } from "./fetchTaskReducer";
import { addTaskReducer } from "./addTaskReducer";
import { deleteTaskReducer } from "./deleteTaskReducer";
import { updateTaskReducer } from "./updateTaskReducer";

export default combineReducers({
  tasksData: fetchTaskReducer,
  newTask: addTaskReducer,
  deletedTask: deleteTaskReducer,
  updatedTask: updateTaskReducer
});
