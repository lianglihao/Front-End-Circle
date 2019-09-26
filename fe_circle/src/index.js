import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// utils
// import { isLogin } from './utils/isLogin'

// ReactDOM.render(<App />, document.getElementById('root'));

const init = () => {
  // if(isLogin) {
  //   window.location.replace('https://www.baidu.com')
  // }
  render(<App />, document.getElementById('root'))
}

init()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
