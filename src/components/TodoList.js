import React, {useReducer} from 'react'
import {initialState, reducer} from '../reducers/reducer'
import Todo from './Todo'

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <div>
        {state.map(todo => {
          return (<Todo key={todo.id} task={todo.task} completed={todo.completed}/>)
        })}
      </div>
  )
}

export default TodoList
