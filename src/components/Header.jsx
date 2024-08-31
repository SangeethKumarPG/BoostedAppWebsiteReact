import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="light" expand="lg" style={{position:"sticky", top:"0",backgroundColor: "rgba(255, 255, 255, 0.9)"}} fixed="top">
        <Container>
          <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <Navbar.Brand>
              <img
                alt=""
                src="./boosted-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Boosted
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbar-toggle"></Navbar.Toggle>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ms-auto" style={{ marginRight: "40rem" }}>
              <Nav.Link><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></Nav.Link>
              <Nav.Link><Link to="/features" style={{textDecoration:"none", color:"black"}}>Features</Link></Nav.Link>
              <Nav.Link><Link to="/testimonials" style={{textDecoration:"none", color:"black"}}>Testimonials</Link></Nav.Link>
              <Nav.Link><Link to="/pricing" style={{textDecoration:"none", color:"black"}}>Pricing</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
