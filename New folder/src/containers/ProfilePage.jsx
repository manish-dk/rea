import React, { Component } from "react";

import { Table } from "react-bootstrap";

class ProfilePage extends Component {
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
      <Table id="test" bordered striped hover condensed>
        <thead>
          <th>PROFILE</th>
        </thead>
        <tbody>
          {this.state.allPeople
            .filter(item => item.id === "5bc9a4bc7e293b0488fee89d")
            .map(function(item, key) {
              return (
                <div>
                  <tr key={key}>
                    <td>
                      <img
                        src="https://files.ontario.ca/small-biz-advice.png"
                        class="img-rounded"
                        alt="Cinque Terre"
                      />
                    </td>
                  </tr>
                  <tr key={key}>
                    <td>{item.name}</td>
                  </tr>
                  <tr key={key}>
                    <td>{item.email}</td>
                  </tr>
                </div>
              );
            })}
        </tbody>
      </Table>
    );
  }
}

export default ProfilePage;
