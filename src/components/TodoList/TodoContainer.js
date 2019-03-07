import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeTodo, toggleTodo } from "../../actions/todos";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../../utils/constants";
import AddTodo from "../AddTodo";
import VisibilityFilter from "../VisibilityFilter";
import TodoList from "./TodoList";

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_ALL
    };
  }

  handleClick = e => {
    const { name } = e.target;

    this.setState({ filter: name });
  };

  render() {
    return (
      <Fragment>
        <AddTodo />
        <TodoList
          todos={getVisibleTodos(this.props.todos, this.state.filter)}
          onToggle={this.props.toggleTodo}
          onRemove={this.props.removeTodo}
        />
        <VisibilityFilter
          onClick={this.handleClick}
          currentFilter={this.state.filter}
        />
      </Fragment>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return;
  }
};

TodoContainer.defaultProps = {
  todos: [],
  removeTodo: () => {},
  toggleTodo: () => {}
};

TodoContainer.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeTodo,
      toggleTodo
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
