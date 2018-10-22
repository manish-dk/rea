import React, { Component } from "react";
import NavbarFeatures from "./NavBarFeatures";
import { Table, Grid, Row, Col, Clearfix } from "react-bootstrap";
import TraineeTable from "../components/TraineeTable";
import ProfilePage from "../containers/ProfilePage";

class TrainerPage extends Component {
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
      <div className="TrainerPage">
        <NavbarFeatures
          class="p-3 mb-2 bg-dark text-white"
          className="NavBarMain1"
        />
        <div>
          <h1>TRAINER PAGE</h1>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>
                <h1> Profile Table </h1>
                <ProfilePage />
              </code>
            </Col>

            <Col xs={12} md={8}>
              <code>
                <TraineeTable />
              </code>
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}

export default TrainerPage;
