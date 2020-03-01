import React from "react";
import { deleteTask, updateTask } from "../actions/index";
import { useDispatch } from "react-redux";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const onClickUpdate = () => {
    dispatch(updateTask(task));
  };

  return (
    <>
      <li className={`task-list-item status-${task.status}`}>
        <span
          className={`icon-check-${task.status.toLowerCase()}`}
          onClick={onClickUpdate}
        >
          <i className="fa fa-check-circle-o" aria-hidden="true"></i>
        </span>
        <strong className="title">{task.title}</strong>
        <span className="icon-rm" onClick={onClickDelete}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </>
  );
};

export default TaskItem;
