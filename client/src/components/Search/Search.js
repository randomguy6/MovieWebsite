import React, {Component} from 'react';
import { Grid, Typography } from "@material-ui/core";
import MovieCard from "../MovieCard/MovieCard";
import style from './Search.module.css';

export default class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    let name = decodeURI(this.props.match.params.id);
    fetch("/search/"+name)
      .then(res => res.json())
      .then(movies => this.setState({movies}))
  }

  render() {
    if(this.state.movies.length !== 0){
      const movies = this.state.movies.map(movie =>{
        return (
          <Grid key={"search-"+movie.title} item>
            <MovieCard movie={movie}/>
          </Grid>
        );
      });
      return (
        <div style={{textAlign: "center", marginLeft: "auto", marginRight: "auto", padding: "0rem 5rem"}}>
          <Typography style={{marginTop:"2rem", marginBottom: "2rem"}} variant="h3">Search</Typography>
          <Grid container justify="center" spacing={5}>
            {movies}
          </Grid>
        </div>
      );
    }
    else{
      return (
        <div id="homePage">
        <p>Loading...</p>
        </div>
      );
    }
  }
}
