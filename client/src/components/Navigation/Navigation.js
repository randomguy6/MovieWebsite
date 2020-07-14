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
        <Navbar bg="light" sticky="top">
            <Navbar.Brand>Future Logo in Here</Navbar.Brand>
            <Nav className="mr-auto text-center">
                <NavLink className="links" exact="true" href="/" >Home</NavLink>
                <NavLink className="links" exact="true" href="/other/123" >Random Page</NavLink>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
