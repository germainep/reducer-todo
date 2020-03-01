import React, { useReducer } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoForm state={state} dispatch={dispatch} />
      <TodoList todos={state} dispatch={dispatch} />
      <button>Clear Completed</button>
    </div>
  );
}

export default App;
