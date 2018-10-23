import React, { Component } from "react";
import NavbarFeatures from "./NavBarFeatures";
import ProfilePage from "../containers/ProfilePage";
import { Table, Grid, Row, Col, Clearfix } from "react-bootstrap";

// import ProfilePage from "./containers/ProfilePage";
class TraineePage extends Component {
  render() {
    return (
      <div className="TraineePage">
        <NavbarFeatures
          class="p-3 mb-2 bg-dark text-white"
          className="NavBarMain1"
        />
        <div>
          <h1>**TRAINEE**</h1>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <code>
                  <ProfilePage />
                </code>
              </Col>

              <Col xs={12} md={8}>
                <code>
                  <p>UPLOAD CV, other stuff here</p>
                </code>
              </Col>
            </Row>
          </Grid>;
        </div>
      </div>
    );
  }
}

export default TraineePage;
