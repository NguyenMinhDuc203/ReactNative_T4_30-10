// src/redux/todoSaga.js
import { takeEvery, put } from 'redux-saga/effects';
import { addTodo, removeTodo, updateTodo } from './actions';

function* addTodoAsync(action) {
  yield put(addTodo(action.payload));
}

function* removeTodoAsync(action) {
  yield put(removeTodo(action.payload));
}

function* updateTodoAsync(action) {
  yield put(updateTodo(action.payload));
}

function* rootSaga() {
  yield takeEvery('ADD_TODO_ASYNC', addTodoAsync);
  yield takeEvery('REMOVE_TODO_ASYNC', removeTodoAsync);
  yield takeEvery('UPDATE_TODO_ASYNC', updateTodoAsync);
}

export default rootSaga;
