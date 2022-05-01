import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './Expenses';
import {Calculator}from './Calculator/Calculator'


ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Expenses/> */}
   <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
);

