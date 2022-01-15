import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import locksmith_logo from "../../assets/images/locksmith.jpg";
import locksmith_small_logo from "../../assets/images/locksmith_small_logo.png";

function Navbar_cus() {
  return (
    <Container>
      <img
        id="logo-main"
        src={locksmith_logo}
        width="100%"
        height="100%"
        alt="Logo Thing main logo"
      ></img>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/locksmithNorth">
                <Nav.Link>צפון</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/locksmithCenter">
                <Nav.Link>מרכז</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/locksmithSouth">
                <Nav.Link>דרום</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Recommended">
                <Nav.Link>המומלצים שלנו</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className="ms-auto">
            פורטל המנעולנים{" "}
            <img
              alt="small_logo"
              src={locksmith_small_logo}
              width="30"
              height="30"
              className="d-inline-block align-top ml-auto"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navbar_cus;
