import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import headphone from "../images/headphone.jpg";
import nophoto from "../images/nophoto.png";

import Nav from "./Nav";

export default function Dashboard() {
  return (
    <div>
      <Row style={{ margin: 0 }}>
        <Col style={{ padding: 0 }} xs={6} md={1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
            }}
          >
            <div style={{ width: "50px", height: "50px", margin: "2rem" }}>
              <Image style={{ width: "100%" }} src={headphone} />
            </div>
            <div style={{ width: "50px", height: "50px", margin: "2rem" }}>
              <Image style={{ width: "100%" }} src={nophoto} roundedCircle/>
            </div>
          </div>
        </Col>
        <Col xs={12} md={11} style={{ padding: 0, backgroundColor: "#f7f7f7" }}>
          <div style={{ marginBottom:"3rem", boxShadow: "0 2px 3px lightgray" }}>
            <Nav />
            <Container style={{ height: "50vh" }}>
              <Jumbotron>
                <h1>Welcome to the dashboard</h1>
              </Jumbotron>
            </Container>
          </div>
          <div style={{ }}>
            <Container style={{ height: "50vh" }}>
              <Jumbotron>
                <h1>Welcome to the dashboard</h1>
              </Jumbotron>
            </Container>
          </div>
        </Col>
      </Row>
    </div>
  );
}