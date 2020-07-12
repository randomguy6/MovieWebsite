import React, {Component} from 'react';
import logo from '../images/logo.svg';
import './App.css';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    fetch("http://localhost:9000/testAPI")
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
