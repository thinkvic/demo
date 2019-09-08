import React from 'react';
import { ReactDOM, render } from 'react-dom';
import App from './App'
import './index.css';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';


// ========================================
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ 
         composeEnhancers(  applyMiddleware( thunk) )
  );
// const store = createStore(rootReducer, applyMiddleware(thunk));

render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// Redux is a predictable state container for JavaScript apps.



//   Using Redux with any UI layer requires the same consistent set of steps:

// 1 Create a Redux store
// 2 Subscribe to updates
// 3 Inside the subscription callback:
// Get the current store state
// Extract the data needed by this piece of UI
// Update the UI with the data
// 4 If necessary, render the UI with initial state
// 5 Respond to UI inputs by dispatching Redux actions
// While it is possible to write this logic by hand, doing so would become very repetitive. In addition, optimizing UI performance would require complicated logic.

// The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.