import React from "react";
import Form from "react-bootstrap/Form";


export default function Search() {
  return (
    <Form.Group>
      <Form.Control
        type="text"
        size="lg"
        placeholder="Enter email"
      />
    </Form.Group>
  );
}
