import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";
import { useDispatch } from "react-redux";

const TaskInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const submitValue = e => {
    if (e.key === "Enter" || e.type === "click") {
      dispatch(addTask(inputValue));
    }
  };

  return (
    <div className="row">
      <div className="form-group">
        <label htmlFor="task_input">Title:</label>
        <input
          className="form-control"
          type="text"
          name="task_input"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={e => submitValue(e)}
        />
        <div className="submitter">
          <button className="btn btn-submit" onClick={e => submitValue(e)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(TaskInput);
