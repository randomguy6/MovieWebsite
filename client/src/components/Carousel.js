import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import './App.css';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export default class CustomCarousel extends Component{

  constructor(props){
      super(props);
      this.state = {
          movies: this.props.movieList
      }
  }

  renderItems(){
      console.log("Access from carousel", this.state.movies[0]);
    return(
      <Paper>
        <h2>{this.state.movies[0]}</h2>
        <p>Its something</p>
      </Paper>
    );
  }

  renderCarousel(){
    return(
      <Carousel autoPlay={true} animation>
        {this.renderItems()}
      </Carousel>
    );
  }

  render() {
    return (
      <div>
        {this.renderCarousel()}
      </div>
    );
  }
}
