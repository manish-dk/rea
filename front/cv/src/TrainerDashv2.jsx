import React, { Component } from "react";

class TrainerDashv2 extends Component {
  constructor(props) {
    super(props);
    this.state = { allPeople: [] };
  }
  componentDidMount() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://192.168.1.117:8090/api/people");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.responseType = "json";
    request.send();

    request.onload = () => {
      this.setState({ allPeople: request.response });
    };
  }
  render() {
    console.log(JSON.stringify(this.state.allPeople));
    return (
      <table>
        <tbody>
          {this.state.allPeople.map(function(item, key) {
            return (
              <tr key={key}>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TrainerDashv2;
