import React, {useState,} from 'react'

const TodoForm = (state) => {
  const [task, setTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    state.dispatch({type: 'add', payload: task})
    setTask('');
  }

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  return (
      <form onSubmit={handleSubmit}>
        <input placeholder='enter new task' value={task} onChange={handleChange}/>
        <button>submit task</button>
      </form>
  )
}

export default TodoForm
