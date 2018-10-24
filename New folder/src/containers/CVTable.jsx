import React, { Component } from "react";

import { Table, Image, Button } from "react-bootstrap";

var url;

var theId;

var animals;

var str;

var strtwo;

var strthree;

export default class CVTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPeople: []
    };
  }

  componentDidUpdate = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.open(
      "GET",
      "http://192.168.1.117:8090/api/" + this.props.userId + "/cvs"
    );

    xhttp.setRequestHeader("Content-Type", "application/json");

    //xhttp.setRequestHeader("Key", "file");

    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.setRequestHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS, HEAD"
    );

    xhttp.responseType = "json";

    xhttp.send();

    xhttp.onload = () => {
      this.setState({ allPeople: xhttp.response });
    };
  };

  onChangeState = () => {
    var x1 = document.getElementById("t1");

    var x2 = document.getElementById("t2");

    var x3 = document.getElementById("t3");

    if (x1 != null) {
      str = this.state.allPeople[0].files_id;
    }

    if (x2 != null) {
      strtwo = this.state.allPeople[1].files_id;
    }

    if (x3 != null) {
      strthree = this.state.allPeople[2].files_id;
    }

    if (x1 != null) {
      x1.addEventListener("click", function() {
        url = "http://192.168.1.117:8090/api/people/" + theId + "/cv/" + str;
      });
    }

    if (x2 != null) {
      x2.addEventListener("click", function() {
        url = "http://192.168.1.117:8090/api/people/" + theId + "/cv/" + strtwo;
      });
    }

    if (x3 != null) {
      x3.addEventListener("click", function() {
        url =
          "http://192.168.1.117:8090/api/people/" + theId + "/cv/" + strthree;
      });
    }

    let xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", url);

    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.setRequestHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS, HEAD"
    );

    xhttp.responseType = "json";

    xhttp.send();

    xhttp.onload = () => {
      console.log(xhttp.response);
    };
  };

  componentDidMount = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.open(
      "GET",
      "http://192.168.1.117:8090/api/" + this.props.userId + "/cvs"
    );

    xhttp.setRequestHeader("Content-Type", "application/json");

    //xhttp.setRequestHeader("Key", "file");

    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.setRequestHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS, HEAD"
    );

    xhttp.responseType = "json";

    xhttp.send();

    xhttp.onload = () => {
      this.setState({ allPeople: xhttp.response });
    };
  };

  checkStatus = item => {
    if (item.state == "Approved") {
      return "#2a820d";
    } else if (item.state == "Unapproved") {
      return "orange";
    } else if (item.state == "Flagged") {
      return "#ed121d";
    }
  };

  render() {
    let animals = this.state.allPeople;

    var counter = 0;

    theId = this.props.userId;

    return (
      <Table bordered striped hover condensed>
        <thead>
          <th>CVs</th>
        </thead>

        <tbody>
          {this.state.allPeople.map(
            function(item, key) {
              return (
                <div>
                  <tr key={key}>
                    <td>
                      <a
                        href={
                          "http://192.168.1.117:8090/api/" +
                          this.props.userId +
                          "/cv/" +
                          item.files_id
                        }
                      >
                        {item.name}
                      </a>
                    </td>

                    <td
                      style={{
                        "background-color": this.checkStatus(item)
                      }}
                    >
                      {item.state}
                    </td>

                    <td>
                      <Button
                        bsStyle="info"
                        className="button"
                        id={"t" + ++counter}
                        name={"t" + counter}
                        onClick={this.onChangeState}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </div>
              );
            }.bind(this)
          )}
        </tbody>
      </Table>
    );
  }
}
