export const initialState = [
  { task: "Write TODO app", completed: false, id: 294849128 }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { task: action.payload, completed: false, id: Date.now() }
      ];
    case "toggle":
      state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return [...state];
      });
      return [...state];

    case "clear":
      return [...state, action];
    default:
      return state;
  }
};
