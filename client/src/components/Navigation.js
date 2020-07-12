import React, {Component} from 'react';
import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import './App.css';

export default class Navigation extends Component{

  render() {
    return (
      <div id="navigationBar">
        <Navbar bg="dark" sticky="top">
            <Navbar.Brand>Future Logo in Here</Navbar.Brand>
            <Nav className="mr-auto">
                {/* <NavLink to="/">Home</NavLink> */}
                {/* <NavLink>Reviews</NavLink> */}
                {/* <NavLink>Lists</NavLink> */}
                {/* <NavLink to="/other/123">OtherPage</NavLink> */}
            </Nav>
        </Navbar>
      </div>
    );
  }
}
