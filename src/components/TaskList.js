import React from "react";
import TaskItem from "./TaskItem";
import Loader from "./Loader";
import Messages from "./Messages";
import { fetchTasks } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const { newTask, deletedTask, updatedTask } = useSelector(state => state);
  const { tasks, isLoading, empty, errMsg } = useSelector(
    state => state.tasksData
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, [newTask, deletedTask, updatedTask]);

  const renderItems = () => {
    return (
      tasks &&
      tasks.map(task => {
        return <TaskItem task={task} key={task.id} />;
      })
    );
  };

  return (
    <div className="row">
      <div>
        <ul className="task-list">{renderItems()}</ul>
      </div>
      <Loader isLoading={isLoading} />
      <Messages empty={empty} errMsg={errMsg} />
    </div>
  );
};

export default TaskList;
