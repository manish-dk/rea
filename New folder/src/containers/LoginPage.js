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
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./LoginPage.css";
import NavbarFeatures from "./NavBarFeatures";
import CryptoJS from "cryptojs";
import Background from "../components/images/bg7.jpg";
import NavbarSimple from "../components/NavBarSimple";
import md5 from "react-native-md5";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirectPath: "",
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch("/api/people");
    const body = await response.text();
    this.setState({ people: body, isLoading: false });
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // handleClick(event) {
  //   var apiBaseUrl = "http://localhost:3000/api/login";
  //   var self = this;
  //   var payload = {
  //     email: this.state.username,
  //     password: this.state.password
  //   };
  // }

  handleSubmit = event => {
    event.preventDefault();

    var emailstr = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const url = "http://192.168.1.117:8090/api/login";

    var user = JSON.stringify({
      email: emailstr,
      password: md5.hex_md5(password+"")
    });

    console.log(user);

    try {
      let xhttp = new XMLHttpRequest();
      xhttp.open("POST", url);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhttp.setRequestHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, HEAD"
      );
      xhttp.responseType = "text";
      xhttp.send(user);
      xhttp.onload = () => {
        console.log(xhttp.responseText);

        this.setState({ redirectPath: xhttp.responseText });
        console.log(this.state.redirectPath);
      };

      // alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
    this.props.onLogin(emailstr);
  };

  render() {
    var divStyle = {
      color: "white",
      margin: "auto",
      padding: "5%",
      width: "510px"
    };

    var bgStyle = {
      width: "100%",
      height: "1920px",
      backgroundImage: "url(" + Background + ")",
      backgroundRepeat: "no-repeat",
      // backgroundPosition: 'center',
      backgroundSize: "stretch",
      color: "white"
    };
    const { people, isLoading } = this.state;

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    var redirectPath = this.state.redirectPath;
    console.log(this.state);
    console.log(redirectPath);
    if (redirectPath === "Trainer" || redirectPath === "trainer") {
      return <Redirect to="/Trainer" />;
    }
    if (redirectPath === "Trainee" || redirectPath === "trainee") {
      return <Redirect to="/Trainee" />;
    }
    if (redirectPath === "Manager" || redirectPath === "manager") {
      return <Redirect to="/Manager" />;
    }
    if (redirectPath === "Sales" || redirectPath === "sales") {
      return <Redirect to="/Sales" />;
    }
    if (
      redirectPath === "Soft Skills" ||
      redirectPath === "soft skills" ||
      redirectPath === "Soft skills" ||
      redirectPath === "soft Skills"
    ) {
      return <Redirect to="/Softskills" />;
    }

    return (
      <div style={bgStyle}>
        <NavbarSimple
          class="p-3 mb-2 bg-dark text-white"
          className="NavBarMain1"
        />

        <h2>Login</h2>

        <div style={divStyle}>
          <form id="loginFormId" onSubmit={this.handleSubmit}>
            <Form>
              <div className="form-outline md-form mt-0">
                <FormGroup controlId="email" bsSize="sm">
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup controlId="password" bsSize="sm">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>

                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>

            {/* <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem> */}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
