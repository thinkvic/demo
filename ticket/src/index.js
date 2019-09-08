import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer);

// npm install redux, react-redux
// npm add antd
// npm install --save ag-grid-community ag-grid-react

ReactDOM.render(

    // store now is a context value
    // available to 
    // any nested components that have been wrapped in the connect() function
    // or hooks useSelector callback
    <Provider store={store}>
        <App  />
    </Provider>
    ,


    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
