import React, {Component} from 'react';
import { Grid, Paper } from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./About.module.css";
import {statements} from "./statements";

export default class About extends Component{

  renderCards(){
    return statements.map(card =>{
      return(
        <Grid item>
          <Paper className={style.cards} elevation={3}>
            <h3><u>{card.title}</u></h3>
            <p>{card.description}</p>
          </Paper>
        </Grid>
      );
      }
    )
  }

  render() {
    return (
      <div key="about">
        <Grid container class={style.About} spacing={2}>
          <h1>About Spotlight Reviews</h1>
          {this.renderCards()}
        </Grid>
      </div>
    );
  }
}
