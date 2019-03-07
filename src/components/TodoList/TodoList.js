import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo";
import "./todo-list.css";

const TodoList = ({ todos, onToggle, onRemove }) => (
  <div className="todo-list">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func
};

export default TodoList;
