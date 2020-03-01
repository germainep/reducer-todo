import React from "react";
import Todo from "./Todo";

const TodoList = state => {
  const toggleComplete = (e, id) => {
    state.dispatch({ type: "toggle", payload: id });
  };
  const clearCompleted = e => {
    state.dispatch({ type: "clear" });
  };

  return (
    <div>
      <button onClick={clearCompleted}>Clear Completed</button>
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
    </div>
  );
};

export default TodoList;
