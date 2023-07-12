import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { uiReducer } from './reducers/uiReducers';

// Create a Redux store using the uiReducer
const store = createStore(uiReducer);

// Render the App component within the Redux Provider and attach it to the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
