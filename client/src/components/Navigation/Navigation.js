import React, {Component} from 'react';
import { Nav, NavbarBrand, NavLink, Form } from "reactstrap";
import { Grid, Input } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import style from './Navigation.module.css';

export default class Navigation extends Component{

  constructor(props){
    super(props);
    this.state = {
      // PUT THESE IN ORDER
      links: [{ name: "Home", ref: "/"}, 
              { name: "Reviews", ref: "/reviews"},
              { name: "Playground", ref: "/other/123"},
              { name: "About Me", ref: "/about"}],
      search: ""
    };
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  renderLinks(){
    return this.state.links.map(link => {
      return (
        <NavLink key={"link-"+link.name} className={style.link} exact="true" href={link.ref}>{link.name}</NavLink>
      );
    });
  }

  handleKeyPress(e){
    if (e.key === 'Enter') {
      return <Redirect to={"/search/"+this.state.search} />
    }
  }

  renderSearch(){
    if(this.state.search.length === 0)
      return <Redirect to={"/search/"+this.state.search} />
    else{
      return(
        <Form>
          <Input className={style.input} type="textarea" placeholder="Search movie..." onKeyDown={this.handleKeyPress} onChange={(e) => this.setState({search: e.target.value})}/>
            <Link to={"/search/"+this.state.search}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Link>
        </Form>
      );
    }
  }

  render() {
    return (
      <div className={style.navigationBar} id="navigationBar">
        <NavbarBrand>Future Logo in Here</NavbarBrand>
        {this.renderSearch()}
        <hr />
        <Nav horizontal="center">
          {this.renderLinks()}
        </Nav>
      </div>
    );
  }
}
