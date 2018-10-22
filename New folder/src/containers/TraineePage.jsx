import React, { Component } from "react";
import NavbarFeatures from "./NavBarFeatures";
// import ProfilePage from "./containers/ProfilePage";
class TraineePage extends Component {
  state = {};
  render() {
    return (
      <div className="TraineePage">
        <NavbarFeatures
          class="p-3 mb-2 bg-dark text-white"
          className="NavBarMain1"
        />
        <div>
          <h1>**TRAINEE**</h1>
          {/* <ProfilePage /> */}
        </div>
      </div>
    );
  }
}

export default TraineePage;
