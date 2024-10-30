// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NoteApp from './components/NoteApp';

const App = () => {
  return (
    <Provider store={store}>
      <NoteApp />
    </Provider>
  );
};

export default App;
