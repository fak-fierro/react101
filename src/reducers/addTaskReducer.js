import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  newTask: ""
};

export const addTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TASK_ADDED:
      return { ...state, newTask: action.payload };
    case actionTypes.POST_ERROR:
      return { ...state, errMsg: action.payload };
    default:
      return state;
  }
};
