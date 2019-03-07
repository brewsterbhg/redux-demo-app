import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todos";
import { bindActionCreators } from "redux";
import "./add-todo.css";

const AddTodo = ({ addTodo }) => {
  let input;

  return (
    <form
      className="add-todo-wrapper"
      onSubmit={e => {
        e.preventDefault();

        if (!input.value.trim()) return;

        addTodo(input.value);
        input.value = "";
      }}
    >
      <input
        ref={node => {
          input = node;
        }}
      />
      <button type="submit" className="btn-success">
        Add Todo
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
