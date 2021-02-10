import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/fonts.scss';
import { Provider } from "react-redux"
import generateStore from './redux/store';

const store = generateStore()

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
