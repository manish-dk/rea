import React, { Component } from "react";
import CryptoJS from "cryptojs";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import NavBarAdmin from "../components/NavBarAdmin";
import md5 from "react-native-md5";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailstr: "",
      passstr: "",
      name: "",
      role: "",
      city: "",
      redirectPath: "",
      isAuthenticated: false
    };
  }

  validateForm() {
    return this.state.emailstr.length > 0 && this.state.passstr.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    var emailstr = document.getElementById("emailstr").value;
    var passstr = document.getElementById("passstr").value;
    var name = document.getElementById("name").value;

    var role = document.getElementById("roleSelect");
    var roleSelected = role.options[role.selectedIndex].value;

    const url = "http://192.168.1.117:8090/api/people";

    var user = JSON.stringify({
      email: emailstr,
      name: name,
      role: roleSelected,
      password: md5.hex_md5(passstr + "")
    });

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
    };
  };
  render() {
    var divStyle = {
      color: "blue",
      margin: "auto",
      padding: "5%",
      width: "510px"
    };

    return (
      <div className="Register">
        <NavBarAdmin
          class="p-3 mb-2 bg-dark text-white"
          className="NavBarMain1"
        />

        <form onSubmit={this.handleSubmit}>
          <div style={divStyle} className="registerForm">
            <FormGroup controlId="name" bsSize="sm">
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup controlId="emailstr" bsSize="sm">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="email"
                value={this.state.emailstr}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup controlId="passstr" bsSize="sm">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.passstr}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>

            <FormGroup controlId="role" bsSize="sm">
              <ControlLabel>Role</ControlLabel>
              <select class="form-control" id="roleSelect">
                <option>Trainee</option>
                <option>Trainer</option>
                <option>Sales</option>
                <option>Manager</option>
              </select>
            </FormGroup>
            <Button
              block
              bsSize="sm"
              disabled={!this.validateForm()}
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
