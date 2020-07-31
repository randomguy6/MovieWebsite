import React, {Component} from 'react';
import { Nav, NavbarBrand, NavLink } from "reactstrap"
import style from './Navigation.module.css';

export default class Navigation extends Component{
  constructor(props){
    super(props);
    this.state = {
      // PUT THESE IN ORDER
      links: [{ name: "Home", ref: "/"}, 
              { name: "Reviews", ref: "/reviews"},
              { name: "Playground", ref: "/other/123"},
              { name: "About Me", ref: "/about"}]
    };
  }

  renderLinks(){
    return this.state.links.map(link => {
      return (
        <NavLink key={"link-"+link.name} className={style.link} exact="true" href={link.ref}>{link.name}</NavLink>
      );
    });
  }

  render() {
    return (
      <div id="navigationBar">
        <NavbarBrand>Future Logo in Here</NavbarBrand>
          <Nav horizontal="center">
              {this.renderLinks()}
          </Nav>
      </div>
    );
  }
}
