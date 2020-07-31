import React, {Component} from 'react';
import { /*Grid,*/ Paper, Typography } from "@material-ui/core" //MIGHT LOOK INTO WHEN DOING ANOTHER ISSUE
import {Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./About.module.css";
import {statements} from "./statements";

export default class About extends Component{

  renderCards(){
    return statements.map(card =>{
      return(
        // <Grid key={card.title} wrap="wrap" zeroMinWidth item>
        //   <Paper className={style.cards} elevation={3}>
        //     <h3 style={{textAlign: "center"}}><u>{card.title}</u></h3>
        //     <Typography>{card.description}</Typography>
        //   </Paper>
        // </Grid>
          <Col>
            <Paper className={style.cards} elevation={3}>
              <h3 style={{textAlign: "center"}}><u>{card.title}</u></h3>
              <p>{card.description}</p>
            </Paper>
          </Col>
      );
      }
    )
  }

  render() {
    return (
      <div key="about">
        <h1 style={{textAlign: "center"}}>About Spotlight Reviews</h1>
        {/* <Grid container justify="center" spacing={5}> */}
        <Container className={style.About}>
          <Row>
            {this.renderCards()}
          </Row>
        </Container>
        {/* </Grid> */}
      </div>
    );
  }
}
