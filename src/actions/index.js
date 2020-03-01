import actionTypes from "./actionTypes";
import { tasksApi } from "../apis/tasksApi";

export const fetchTasks = () => async dispatch => {
  try {
    const res = await tasksApi.get("/tasks");
    dispatch({
      type: actionTypes.FETCH_ALL_TASKS,
      payload: {
        tasks: res.data.tasks,
        isLoading: false,
        empty: res.data.tasks.length === 0
      }
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCH_ERROR,
      payload: {
        errMsg: `Error fetching tasks :( (Error: ${e.message.toString()})`,
        isLoading: false,
        empty: ""
      }
    });
  }
};

export const addTask = title => async dispatch => {
  try {
    await tasksApi.post("/tasks", { title: title, status: "PENDING" });
    dispatch({
      type: actionTypes.TASK_ADDED,
      payload: title
    });
  } catch (e) {
    dispatch({
      type: actionTypes.POST_ERROR,
      payload: `Unable to add task (Error: ${e.message.toString()})`
    });
  }
};

export const deleteTask = id => async dispatch => {
  try {
    await tasksApi.delete(`/tasks/${id}`);
    dispatch({
      type: actionTypes.TASK_DELETED,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: actionTypes.DELETE_ERROR,
      payload: `Unable to add task (Error: ${e.message.toString()})`
    });
  }
};

export const updateTask = task => async dispatch => {
  const updatedStatus = task.status === "PENDING" ? "COMPLETE" : "PENDING";
  try {
    await tasksApi.put(`/tasks/${task.id}`, { status: updatedStatus });
    dispatch({
      type: actionTypes.TASK_UPDATED,
      payload: task.id
    });
  } catch (e) {
    dispatch({
      type: actionTypes.UPDATE_ERROR,
      payload: `Unable to update the task ${
        task.title
      } (Error: ${e.message.toString()})`
    });
  }
};
