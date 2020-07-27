import React, {Component} from 'react';
import { Navbar, Nav, NavLink } from "react-bootstrap"
import style from './Navigation.module.css';

export default class Navigation extends Component{
  constructor(props){
    super(props);
    this.state = {
      navActive: "Home"
    };
  }

  render() {
    return (
      <div id="navigationBar">
        <Navbar.Brand>Future Logo in Here</Navbar.Brand>
        <Navbar bg="light" sticky="top">
          <Nav className={style.centered}>
              <NavLink exact="true" href="/">Home</NavLink>
              {/* <NavLink>Rants</NavLink> */}
              <NavLink exact="true" href="/reviews">Reviews</NavLink>
              <NavLink exact="true" href="/other/123">Random Page</NavLink>
              <NavLink exact="true" href="/about">About Me</NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
