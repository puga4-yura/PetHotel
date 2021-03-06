import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import store from './redux/redux-store'
import {Provider} from "react-redux";
//import {BrowserRouter} from "react-router-dom";
import redusers from './redux/redux-store'
import thunk from "redux-thunk"
import {applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


let store =  createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunk))
);

/*export let rerenderEntireTree = (state) => {*/
  ReactDOM.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
    document.getElementById('root'));
/*
}
*/

//state={store.getState()} dispatch={store.dispatch.bind(store)}
//rerenderEntireTree(store.getState());

/*
store.subscribe(() => {
  //let state = store.getState()
  rerenderEntireTree(state);
})
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
