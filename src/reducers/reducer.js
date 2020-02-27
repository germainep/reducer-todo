export const initialState = [
  {task: 'Write TODO app', completed: false, id: 294849128}
]

export const reducer = (state, action) => {
  switch (action.type) {

    case 'add':
      return {...state, }
    case 'clear':
      return {...state, action}
    default:
      return state

  }

}


