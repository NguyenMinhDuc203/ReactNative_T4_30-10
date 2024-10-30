// src/components/TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from '../redux/actions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [todoText, setTodoText] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  const handleAddTodo = () => {
    if (editTodoId) {
      dispatch({ type: 'UPDATE_TODO_ASYNC', payload: { id: editTodoId, text: todoText } });
      setEditTodoId(null);
    } else {
      dispatch({ type: 'ADD_TODO_ASYNC', payload: { id: Date.now(), text: todoText } });
    }
    setTodoText('');
  };

  const handleEditTodo = (todo) => {
    setTodoText(todo.text);
    setEditTodoId(todo.id);
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO_ASYNC', payload: id });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>{editTodoId ? 'Update' : 'Add'} Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
