import React from "react";
import PropTypes from "prop-types";
import "./todo.css";

const Todo = ({ id, completed, text, onToggle, onRemove }) => (
  <li
    className={`todo ${completed ? "complete" : ""}`}
    onClick={() => onToggle(id)}
  >
    {text}
    <button className="remove-todo" onClick={() => onRemove(id)}>
      X
    </button>
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Todo;
