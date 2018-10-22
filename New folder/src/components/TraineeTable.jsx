import React, { Component } from "react";
import { Table } from "react-bootstrap";

class TraineeTable extends Component {
  constructor(props) {
    super(props);

    this.state = { allPeople: [] };
  }

  componentDidMount() {
    let request = new XMLHttpRequest();

    request.open("GET", "http://localhost:8090/api/people");

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
      <Table bordered striped hover condensed>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>CVs</th>
            <th>Status</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {this.state.allPeople
            .filter(item => item.role === "trainee" || item.role === "Trainee")
            .map(function(item, key) {
              return (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.cv}</td>
                  <td>{item.state}</td>
                  <td>
                    <button className="btn">Flag</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }
}

export default TraineeTable;
