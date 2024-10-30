// src/redux/actions.js
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const REMOVE_TODO_ASYNC = 'REMOVE_TODO_ASYNC';
export const UPDATE_TODO_ASYNC = 'UPDATE_TODO_ASYNC';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});
