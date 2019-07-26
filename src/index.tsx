import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import reducer from './reducer'

const store: { result: number, subscribe: any, children?: any } = createStore(reducer)



const myRender = () => render(<App store={store} />, document.getElementById('root') )
store.subscribe(myRender)
myRender()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
