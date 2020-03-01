import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  updatedTask: "",
  errMsg: ""
};

export const updateTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TASK_UPDATED:
      return { ...state, updatedTask: action.payload };
    case actionTypes.UPDATE_ERROR:
      return { ...state, updatedTask: "", errMsg: action.payload };
    default:
      return state;
  }
};
