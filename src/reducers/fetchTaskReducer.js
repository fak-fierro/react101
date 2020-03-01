import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  tasks: [],
  isLoading: true,
  empty: false,
  errMsg: ""
};

export const fetchTaskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
        isLoading: action.payload.isLoading,
        empty: action.payload.empty
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        errMsg: action.payload.errMsg,
        isLoading: action.payload.isLoading,
        empty: ""
      };
    default:
      return state;
  }
};
