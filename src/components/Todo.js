import React from 'react'

const Todo = (props) => {

  return (
      <div onClick={props.toggle(props)}>
        <h1>{props.task}</h1>
      </div>
  )
}

export default Todo
