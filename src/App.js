import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Customer';
import Success from './pages/Success';

class App extends Component {
  getRoutes = () => {
  return (
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
      <Route exact path = "/Success">
        <Success />
      </Route>
      <Route path = "*">
        <div>
          <h1> Error 404 </h1>
          <h1>This page does not exist.</h1>
        </div>
      </Route>
    </Switch>
  );
  }

  render() { 
    return (
      <div>
        <Router>
          <div>
            {this.getRoutes()}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;