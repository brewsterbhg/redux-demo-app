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
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequried
};

export default Todo;
