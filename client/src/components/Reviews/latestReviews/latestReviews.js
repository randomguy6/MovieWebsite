import React, {Component} from 'react';
import { Grid, Typography } from "@material-ui/core";
import MovieCard from "../../MovieCard/MovieCard";
import style from './latestReviews.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class latestReviews extends Component{

  constructor(props){
    super(props);
    this.state = {
        movies: []
    }
  }

  componentDidMount(){
    fetch("/carousel")
      .then(res => res.json())
      .then(movies => this.setState({movies}))
  }

  renderCard(){
    return this.state.movies.map(movie =>{
      return(
        <Grid key={"latest-"+movie.title} item>
          <MovieCard movie={movie}/>
        </Grid>
      );
    });
  }

  render() {
    return (
      <div className={style.center}>
        <hr className={style.line}/>
        <Typography style={{marginBottom: "2rem"}} variant="h4">Latest Movies</Typography>
        <Grid justify="center" container spacing={10}>
          {this.renderCard()}
        </Grid>
      </div>
    );
  }
}
