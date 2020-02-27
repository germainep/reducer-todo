import React from 'react';
import logo from './logo.svg';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
