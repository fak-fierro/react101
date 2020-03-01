import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  deletedTask: "",
  errMsg: ""
};

export const deleteTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TASK_DELETED:
      return { ...state, deletedTask: action.payload };
    case actionTypes.DELETE_ERROR:
      return { ...state, errMsg: action.payload };
    default:
      return state;
  }
};
