import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from "react-router-dom";
// import {LinkContainer} from 'react-router-bootstrap';

export default class NavBarSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    var redirectPath = this.state.redirectPath;
    console.log(this.state);
    console.log(redirectPath);
    if (redirectPath === "Trainer") {
      return <Redirect to="/Trainer" />;
    }
    if (redirectPath === "Trainee") {
      return <Redirect to="/Trainee" />;
    }

    return (
      <div class="p-3 mb-2 bg-dark text-white" className="NavBarMain">
        <Navbar color="blue-grey lighten-5" expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>CV Wonder</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              {/* <nav className="navbar navbar">
                         <ul className="nav">
                            <li>
                         <Link to="/Product">Contact</Link>
                         </li>
                        </ul>
                        </nav> */}

              <NavItem>{/* <Link to="/Contact">Contact</Link> */}</NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>

        <Switch>{/* <Route path="/Contact" component={Contact} /> */}</Switch>
      </div>
    );
  }
}
