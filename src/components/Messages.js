import React from "react";

const Messages = ({ empty, errMsg }) => {
  return (
    <div className="message-empty">
      {errMsg && <h3>{errMsg}</h3>}
      {empty && <h3>There are no tasks</h3>}
    </div>
  );
};

export default Messages;
