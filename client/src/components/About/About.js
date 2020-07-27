import React, {Component} from 'react';
import { Grid } from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./About.module.css";

export default class About extends Component{

  render() {
    return (
      <div key="about">
        <Grid container class={style.About}>
          <Grid item>
            <h1>About Spotlight Reviews</h1>
            <h3>About me</h3>
          </Grid>
        </Grid>
      </div>
    );
  }
}
