import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, Grid} from '@material-ui/core'
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
            <h4> {movie.title} {movie.year}</h4>
            <ul>
                <li key={movie.title+"Review"}> {movie.review} </li>
            </ul>
        </div>
    );
  }

  renderItems(){
      console.log("Access from carousel", this.state.movies[0]);
    return(
      <Card raised>
        <Grid>
          {this.state.movies.map((movie) =>{
              return this.constructReview(movie);
            }
          )}
        </Grid>
      </Card>
    );
  }

  renderCarousel(){
    return(
      <Carousel className="Example" autoPlay={true} animation="slide" navButtonsAlwaysVisible={true}>
        {this.renderItems()}
      </Carousel>
    );
  }

  render() {
    return (
      <div id="homePage">
        <p>In progress</p>
        {this.renderCarousel()}
      </div>
    );
  }
}
