// src/components/Sidebar.js
import React from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ show, onHide }) => {
  // Your sidebar content here

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sections</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link as={Link} to="/" onClick={onHide}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={onHide}>
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/experience" onClick={onHide}>
            Experience
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" onClick={onHide}>
            Projects
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
