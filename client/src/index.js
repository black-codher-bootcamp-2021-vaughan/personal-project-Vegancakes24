import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Expenses from './Expenses';
import {Calculator}from './Calculator/Calculator'
import Nav from "./NavBar/Nav";
import About from "./NavBar/About";
import Calculation from "./NavBar/Calculation";
import Contact from "./NavBar/Contact";

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
   <Router>
    <div className="NB">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
      <Route path="/calculation" component={Calculator} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);






