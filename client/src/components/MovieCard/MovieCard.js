import React, {Component} from 'react';
import { Paper, Typography } from "@material-ui/core";
import StarRating from "react-star-ratings";
import style from '../Reviews/latestReviews/latestReviews.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MovieCard extends Component{

  render() {
    const movie = this.props.movie;
    return (
      <Paper className={style.card} elevation={0}>
        <a href={"/review/" + movie.title}><img alt="poster" src={movie.poster}/></a>
        <a href={"/review/" + movie.title}><Typography variant="h6">{movie.title}</Typography></a>
        <StarRating rating={movie.rating}
                    starRatedColor="rgb(218,165,32)"
                    starDimension="1.5rem"
                    starEmptyColor="white"
        />
      </Paper>
    );
  }
}
