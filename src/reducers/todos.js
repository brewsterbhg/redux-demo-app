const todos = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      });
    case "TOGGLE_TODO":
      return Object.assign({}, state, {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      });
    case "REMOVE_TODO":
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id)
      });
    default:
      return state;
  }
};

export default todos;
