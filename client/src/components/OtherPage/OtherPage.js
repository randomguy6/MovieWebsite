import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";
import { Paper, Typography, Grid } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel'
import './OtherPage.css';

export default class OtherPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    };
  }

  // renderTestCarousel(){
  //   return(
  //     <div id="carousel">
  //       <h1>This is just a playground</h1>
  //       {console.log("This is used to get the id of the url", this.props.match.params.id)}
  //       <Carousel timer={1000} animation="fade" navButtonsAlwaysVisible="true">
  //         <div className="Paper">
  //           <Paper elevation={5}>
  //             <div class="row">
  //               <div class="col">
  //                 <img src="https://bloody-disgusting.com/wp-content/uploads/2019/04/Wicker-Man-e1556216964674.jpg" alt="something"/>
  //               </div>
  //               <div class="col">
  //                 <Typography variant="h5">Meh</Typography>
  //               </div>
  //             </div>
  //           </Paper>
  //         </div>
  //         <div className="Paper">
  //           <Paper elevation={5}>
  //             <Typography align="center" color="primary" variant="h5">Seth</Typography>
  //           </Paper>
  //         </div>
  //       </Carousel>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        {/* {this.renderTestCarousel()} */}
        <h2 style={{textAlign: "center"}}>Friendly center boi</h2>
        <Paper style={{width: "auto", marginLeft: "auto", marginRight: "auto"}} elevation={3}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
            <Grid item container direction="column">
              <div>
                <img alt="Movie Poster" src="https://static.rogerebert.com/uploads/movie/movie_poster/ghosts-of-war-2020/large_ghosts-of-war-poster.jpg"/>
              </div>
              <Typography variant="h6">Something in some year</Typography>
              <Typography variant="caption"><b>Rating:</b> 2.5</Typography>
            </Grid>
            <Grid item container direction="column">
              <p>I am boi</p>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
