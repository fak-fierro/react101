import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <h3 className="task-page-title">{"Tasks:"}</h3>
          </div>
          <TaskInput />
          <TaskList />
        </div>
      </header>
    </div>
  );
};

export default App;
