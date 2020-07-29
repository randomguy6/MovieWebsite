import React, {Component} from 'react';
import { Typography, /*Paper, */Grid } from "@material-ui/core";
import style from './Credits.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Credits extends Component{

  constructor(props){
    super(props)
    this.state = {
      movie: {}
    }
  }

  componentDidMount(){
    let title = this.props.title;
    let year = () => {
        const year = this.props.year
        if(year === undefined)
            return "";
        return year;
    };
    fetch("/credits/"+title+"/"+year())
      .then(res => res.json())
      .then(movie => this.setState({movie}))
      .catch(error =>{
          console.log(error);
      })
  }

  isMovieEmpty(){
    let movie = this.state.movie;
    return Object.keys(movie).length === 0;
  }

  getCast(){
    let items = this.state.movie.Actors;
    items = items.split(", ");
    items = items.map(actor =>{
      return(
        <div key={actor}>
          <Typography variant="subtitle1">{actor}</Typography>
        </div>
      );
    });
    return(
      <div id="cast" key="cast">
        <Typography variant="h6"><b><u>Cast: </u></b></Typography>
        {items}
        <br />
      </div>
    );
  }

  getCrew(){
    const movie = this.state.movie;
    const writers = () => {
      let writers = movie.Writer.split(", ")
      return writers.map(writer => {
        return(
        <div key={writer}>
          <Typography variant="subtitle1">{writer}</Typography>
        </div>
        );
      });
    };
    return(
      <div id="crew" key="crew">
        <div>
          <Typography variant="h6"><b><u>Director: </u></b></Typography>
        </div>
        <div>
          <Typography variant="subtitle1">{movie.Director}</Typography>
        </div>
        <br />
        <div>
          <Typography variant="h6"><b><u>Writers: </u></b></Typography>
        </div>
        <div>
          {writers()}
        </div>
      </div>
    );
  }

  getCredits(){
    return(
      <Grid item key="credits" id="credits">
        {this.getCast()}
        {this.getCrew()}
      </Grid>
    );
  }

  getPosterInfo(){
    const movie = this.state.movie;
    return(
    <Grid item key="Poster Info">
      <div className={style.poster}>
        <img alt="Movie Poster" src={movie.Poster}/>
      </div>
      <Typography variant="h5">{movie.Title} ({movie.Year})</Typography>
      <Typography variant="caption"><b>Rating:</b> {movie.Rated}</Typography>
    </Grid>
    );
  }

  render() {
    if(this.isMovieEmpty()){
        return(
            <p>Loading...</p>
        );
    }
    else{
      return (
        <div className={style.center}>
          <h3 style={{marginBottom: "3rem"}}>Film Credits</h3>
          <Grid container justify="center" spacing={10}>
            {this.getPosterInfo()}
            {this.getCredits()}
          </Grid>
        </div>
      );
    }
  }
}
