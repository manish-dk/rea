import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Login from "./Login";
import Trainee from "./Trainee";
import TrainerDashv2 from "./TrainerDashv2";
import Sidebar from "./Sidebar";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/Trainee" component={Trainee} />
            <Route path="/Trainerdash" component={TrainerDashv2} />
            <Route path="/Sidebar" component={Sidebar} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
