import React from "react";

const Todo = props => {
  return (
    <div
      onClick={e => {
        props.toggle(e, props.id);
      }}
    >
      <h1>{props.task}</h1>
    </div>
  );
};

export default Todo;
