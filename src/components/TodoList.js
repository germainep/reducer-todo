import React from "react";
import Todo from "./Todo";

const TodoList = state => {
  const toggleComplete = (e, id) => {
    state.dispatch({ type: "toggle", payload: id });
    console.log(id);
  };
  return (
    <div>
      {state.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            id={todo.id}
            toggle={toggleComplete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
