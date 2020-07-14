import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import './App.css';

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

  renderCards(){
    let items = [];
    this.state.movies.forEach((movie) => {
      items.push(
        <div key={movie.title + " card"}>
          <Paper elevation={5}>
            <div className="row">
              <div className="col">
                <img src={movie.image} alt={movie.title+ " Scene"}/>
              </div>
              <div className="col">
                <h3>{movie.title}</h3>
                <h5>Rating: {movie.rating}</h5>
              </div>
            </div>
          </Paper>
        </div>
      );
    });
    return items;
  }

  renderCarousel(){
    return(
      <div classs="carousel">
        <Carousel startAt={1} timer={1000} animation="fade" navButtonsAlwaysVisible="true">
          {this.renderCards()}
        </Carousel>
      </div>
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
