import React, {Component} from 'react';
import { Typography, Grid } from "@material-ui/core";
import MovieCard from "../../MovieCard/MovieCard";
import style from './AllMovies.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AllMovies extends Component{

  constructor(props){
    super(props);
    this.state = {
        movies: []
    }
  }

  componentDidMount(){
    fetch("/all-movies")
      .then(res => res.json())
      .then(movies => this.setState({movies}))
  }

  render() {
    if(this.state.movies.length === 0){
        return(
          <p>Loading...</p>
        );
    }
    else{
      const movies = this.state.movies.map(movie =>{
        return (
          <Grid key={"all-"+movie.title} item>
            <MovieCard movie={movie}/>
          </Grid>
        );
      });
      return (
        <div className={style.center}>
          <Typography style={{marginTop:"2rem", marginBottom: "2rem"}} variant="h3">All Reviews</Typography>
          <Grid container justify="center" spacing={5}>
            {movies}
          </Grid>
        </div>
      );
    }
  }
}
