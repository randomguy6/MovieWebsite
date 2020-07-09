import React, {Component} from 'react';
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';
import './App.css';

export default class Navigation extends Component{

  render() {
    return (
        <Container>
            <Navbar bg="light" sticky="top">
                <Navbar.Brand>Future Logo in Here</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Reviews</Nav.Link>
                    <Nav.Link>Lists</Nav.Link>
                </Nav>
            </Navbar>
      </Container>
    );
  }
}
