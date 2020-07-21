import React, {Component} from 'react';
import { Container, Row, Col } from "reactstrap";
import { Typography, Paper, Grid } from "@material-ui/core";
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
        <Row key={actor}>
          <Typography variant="subtitle1">{actor}</Typography>
        </Row>
      );
    });
    return(
      <Container id="cast" key="cast">
        <Row>
          <Typography variant="h6"><u>Cast: </u></Typography>
        </Row>
        {items}
      </Container>
    );
  }

  getCrew(){
    const movie = this.state.movie;
    return(
      <Container id="crew" key="crew">
        <Row>
          <Typography variant="h6"><u>Director: </u></Typography>
        </Row>
        <Row>
          <Typography variant="subtitle1">{movie.Director}</Typography>
        </Row>
        <br />
        <Row>
          <Typography variant="h6"><u>Writers: </u></Typography>
        </Row>
        <Row>
          <Typography variant="subtitle1">{movie.Writer}</Typography>
        </Row>
      </Container>
    );
  }

  getCredits(){
    return(
      <div key="credits" id="credits">
        {this.getCast()}
        {this.getCrew()}
      </div>
    );
  }

  render() {
    if(this.isMovieEmpty()){
        return(
            <p>Loading...</p>
        );
    }
    else{
      const movie = this.state.movie;
      return (
        <div className={style.center}>
          <h3>Film Credits</h3>
          <Grid className={style.data} elevation={2}>
            <Row>
              <Col>
                <div className={style.poster}>
                  <img alt="Movie Poster" src={movie.Poster}/>
                </div>
                <Typography variant="h4">{movie.Title} ({movie.Year})</Typography>
                <Typography variant="caption"><b>Rating:</b> {movie.Rated}</Typography>
              </Col>
              <Col>
                {this.getCredits()}
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }
}
