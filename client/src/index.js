import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './Expenses';
import {Ingredients}from './Calculator/Ingredients'

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Expenses/> */}
    <Ingredients/>
  </React.StrictMode>,
  document.getElementById('root')
);

