import React, {Component} from 'react';
import { Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';
import './App.css';

export default class Navigation extends Component{

  render() {
    return (
        <Navbar bg="light" sticky="top">
            <Navbar.Brand>Future Logo in Here</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link>Reviews</Nav.Link>
                <Nav.Link>Lists</Nav.Link>
                <Nav.Link><Link to="/other/123">OtherPage</Link></Nav.Link>
            </Nav>
        </Navbar>
    );
  }
}
