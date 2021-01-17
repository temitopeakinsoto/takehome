import react from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "semantic-ui-react";

function Navigation() {
  return (
    <Container>
      <Nav style={{ height: "15vh" }} defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navigation;
