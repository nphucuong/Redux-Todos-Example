// @flow

import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

type TodoType = {
  id: number,
  completed: boolean,
  text: string,
  created_at: string
};

type TodoListType = {
  todos: Array<TodoType>,
  toggleTodo: Function
};

const TodoList = ({ todos, toggleTodo }: TodoListType) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
