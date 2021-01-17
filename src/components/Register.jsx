import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Image } from "semantic-ui-react";
import Button from "react-bootstrap/Button";

export default function Register() {
  const [formInputVals, setFormInputVals] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const submitFormValues = async (formValues) => {
    const url = "";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    };

    try {
      const res = await fetch(url, options);
      console.log(formValues);
    } catch(e) {
      
    }
  };

  const onFormInputChange = (e) => {
    setFormInputVals({
      ...formInputVals,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitFormValues(formInputVals)
      .then((res) => {
        console.log("Registration successful!");
      })
      .catch((err) => {
        console.log("There was an error!", err);
      });
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
                  onChange={onFormInputChange}
                  value={formInputVals.fname}
                  name="fname"
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
                  onChange={onFormInputChange}
                  value={formInputVals.lname}
                  name="lname"
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
                  onChange={onFormInputChange}
                  value={formInputVals.email}
                  name="email"
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
                  onChange={onFormInputChange}
                  value={formInputVals.password}
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <Button type="submit" className="btn btn-primary mt-4">
                Register
              </Button>
              <p id="emailHelp" className="form-text text-muted">
                Already have an account? Please Login <Link to="/">here</Link>.
              </p>
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
