import React, {Component} from 'react';
import { Paper, Grid, Typography } from "@material-ui/core";
import StarRating from "react-star-ratings";
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
        <Grid item>
          <Paper className={style.card} elevation={0}>
            <a href={"/review/" + movie.title}><img alt="poster" src={movie.poster}/></a>
            <a href={"/review/" + movie.title}><Typography variant="h6">{movie.title}</Typography></a>
            <StarRating rating={movie.rating}
                        starRatedColor="rgb(218,165,32)"
                        starDimension="1.5rem"
                        starEmptyColor="white"
            />
          </Paper>
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
