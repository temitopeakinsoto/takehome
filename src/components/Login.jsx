import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Login() {
  return (
    <Container className="p-3">
      <Jumbotron>
          <p>This is a sample test</p>
      </Jumbotron>
      <div>
        <div>Illustration Image</div>
        <div>form here</div>
      </div>
      <div>
        <div>Register</div>
        <div>Social Icons</div>
      </div>
    </Container>
  );
}
