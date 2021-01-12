import React from "react";
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Image } from "semantic-ui-react";
import Button from "react-bootstrap/Button";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container
      style={{ border: "1px solid red", height: "100vh" }}
      className="p-5"
    >
      <Row>
        <Col style={{ textAlign: "center" }}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkdMs4He6pZZhqw-3xVPfjcH6cchV1rCQbg&usqp=CAU" />
        </Col>
        <Col>
          <Jumbotron style={{ flexGrow: "1" }}>
            <h1 className="header">Welcome!</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail2">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail3">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail3"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <Button type="submit" className="btn btn-primary mt-4">
                Register
              </Button>
              <small id="emailHelp" className="form-text text-muted">
                Already have an account? Please Login <Link to="/">here</Link>.
              </small>
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
