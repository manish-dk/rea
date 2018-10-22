import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import {
//   Form,
//   FormGroup,
//   ControlLabel,
//   FormControl,
//   Checkbox,
//   Container,
//   Row,
//   Col,
//   Input,
//   Button
// } from "react-bootstrap";

class Login extends Component {
  state = {
    emailValue: "",
    passValue: "",
    redirectPath: ""
  };

  handleEmailChange = event => {
    this.setState({ emailValue: event.target.value });
  };
  handlePassChange = event => {
    this.setState({ passValue: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    let emailstr = document.getElementById("email").value;
    let passstr = document.getElementById("password").value;

    var url = "http://localhost:8090/api/login";

    var user = JSON.stringify({
      email: emailstr,
      password: passstr
    });

    console.log(user);

    var xhttp = new XMLHttpRequest();
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
    };
  };
  render() {
    var redirectPath = this.state.redirectPath;
    console.log(this.state);
    if (redirectPath === "Trainer") {
      return <Redirect to="/Trainer" />;
    }
    if (redirectPath === "Trainee") {
      return <Redirect to="/Trainee" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            className="form-control"
            id="email"
            type="email"
            value={this.state.value}
            onChange={this.handleEmailChange}
          />
        </label>
        <label>
          Password:
          <input
            className="form-control"
            id="password"
            type="password"
            value={this.state.value}
            onChange={this.handlePassChange}
          />
        </label>
        <input className="btn btn-primary m-2" type="submit" value="Submit" />
      </form>
    );

    // <Form horizontal onSubmit={this.handleSubmit}>
    //   <FormGroup controlId="formHorizontalEmail">
    //     <Col componentClass={ControlLabel} sm={2}>
    //       Email
    //     </Col>
    //     <Col sm={10}>
    //       <FormControl
    //         id="email"
    //         value={this.state.value}
    //         onChange={this.handleEmailChange}
    //         type="email"
    //         placeholder="Email"
    //       />
    //     </Col>
    //   </FormGroup>

    //   <FormGroup controlId="formHorizontalPassword">
    //     <Col componentClass={ControlLabel} sm={2}>
    //       Password
    //     </Col>
    //     <Col sm={10}>
    //       <FormControl
    //         id="password"
    //         value={this.state.value}
    //         onChange={this.handlePassChange}
    //         type="password"
    //         placeholder="Password"
    //       />
    //     </Col>
    //   </FormGroup>

    //   <FormGroup>
    //     <Col smOffset={2} sm={10}>
    //       {/* <Checkbox>Remember me</Checkbox> */}
    //     </Col>
    //   </FormGroup>

    //   <FormGroup>
    //     <Col smOffset={2} sm={10}>
    //       <Button type="submit">Sign in</Button>
    //     </Col>
    //   </FormGroup>
    // </Form>
    // );
  }
}

export default Login;
