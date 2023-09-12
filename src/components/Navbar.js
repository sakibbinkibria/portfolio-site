// src/components/Navbar.js
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";
import "../styles.css";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

   const toggleSidebar = () => {
     setSidebarOpen(!sidebarOpen);
   };
  return (
    <>
      <Navbar
        expand="lg"
        bg="custom-bg"
        expanded={expanded}
        className="navbar-custom custom-bg"
        fixed="top"
      >
        <Container>
          <Navbar.Toggle onClick={toggleSidebar} aria-controls="navbar-nav">
            <i className="fa fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Brand href="/">
            <img src="/S logo.png" height={30} />
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/experience">
                Experience
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar show={sidebarOpen} onHide={toggleSidebar} />
    </>
  );
};

export default Navigation;
