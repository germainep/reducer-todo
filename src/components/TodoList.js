import React from 'react'
import Todo from './Todo'

const TodoList = (state) => {
  const toggleComplete = (todo) => {
    state.dispatch({type: 'toggle', payload: todo})
  }
  return (
      <div>
        {state.todos.map(todo => {
          console.log(todo)
          return (<Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              id={todo.id}
              toggle={toggleComplete}/>)
        })}
      </div>
  )
}

export default TodoList
