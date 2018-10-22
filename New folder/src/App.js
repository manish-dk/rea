import React, { Component } from 'react';
import NavBarFeatures from './containers/NavBarFeatures';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import AddUser from './containers/AddUser';
import TraineePage from './containers/TraineePage';
import TrainerPage from './containers/TrainerPage';


class App extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
   

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/AddUser" component={AddUser} />
          <Route path="/Trainer" component={TrainerPage} />
          <Route path="/Trainee" component={TraineePage} />


        </div>
      </Router>
      
    );
  }
}

export default App;
