import React, {Component} from 'react';
import { Typography } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Footer.module.css';

export default class Footer extends Component{

  renderIcons(){
    return(
      <div className={style.icons} id="icons">
        <a href="https://github.com/randomguy6/MovieWebsite" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/saivdonepudi" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square"></i></a>
      </div>
    );
  }
  
  renderLinks(){
    return(
      <div className={style.links} id="links">
        <Typography variant="subtitle2">About</Typography>
      </div>
    );
  }

  render() {
    return (
    <div className={style.footer} id="footer">
        <hr />
        {/* <Typography variant="subtitle2">Am a random boi</Typography> */}
        {this.renderIcons()}
        {this.renderLinks()}
        <Typography variant="caption">&copy; 2020 SpotlightReviews.com</Typography>
    </div>
    );
  }
}
