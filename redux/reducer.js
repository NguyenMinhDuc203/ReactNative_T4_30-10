// src/redux/reducer.js
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map(todo => 
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
