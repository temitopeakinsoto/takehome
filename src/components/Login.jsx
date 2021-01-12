import React from "react";
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Image } from "semantic-ui-react";
import Button from "react-bootstrap/Button";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container
      style={{ border: "1px solid red", height:"100vh"}}
      className="p-5"
    >
      <Row>
        <Col style={{ textAlign:"center"}}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkdMs4He6pZZhqw-3xVPfjcH6cchV1rCQbg&usqp=CAU"/>
        </Col>
        <Col>
          <Jumbotron style={{ flexGrow: "1" }}>
            <h1 className="header">Welcome!</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
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
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label ml-3" for="exampleCheck1">
                  Remember Me!
                </label>
              </div>
              <Button type="submit" className="btn btn-primary mt-4">
                Login
              </Button>
              <small id="emailHelp" className="form-text text-muted">
                  Don't have an account yet? Please sign up <Link to="/register">here</Link>.
                </small>
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
