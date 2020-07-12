import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import './App.css';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export default class CustomCarousel extends Component{

  constructor(props){
      super(props);
      this.state = {
          movies: []
      }
  }

  componentDidMount(){
    fetch("/testAPI")
      .then(res => res.json())
      .then(movies => this.setState({movies}))
  }

  constructReview(movie){
    return(
        <div id={movie.title+" Section"}>
            <li key={movie.title}> {movie.title} {movie.year}</li>
            <ul>
                <li key={movie.title+"Review"}> {movie.review} </li>
            </ul>
        </div>
    );
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
      <div id="homePage">
          <h2>Movies</h2>
          <ul>
              {this.state.movies.map((movie) =>{
                  return this.constructReview(movie);
                }
              )}
          </ul>
      </div>
    );
  }
}
