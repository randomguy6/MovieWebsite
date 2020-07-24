import React, {Component} from 'react';
import { Container, Row } from "reactstrap";
import StarRating from "react-star-ratings";
import { Typography, CircularProgress } from "@material-ui/core";
import Credits from "./Credits/Credits";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Review.module.css';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      movie: {}
    }
  }

  componentDidMount(){
    let name = decodeURI(this.props.match.params.id);
    fetch("/review/"+name)
      .then(res => res.json())
      .then(movie => this.setState({movie}))
  }

  isMovieEmpty(){
    let movie = this.state.movie;
    return Object.keys(movie).length === 0;
  }

  renderHeader(){
    return(
      <Container id="reviewHeader">
        <div id="contents" className={style.header}>
          <h1>{this.state.movie.title}</h1>
          <Typography className={style.subtitle} variant="subtitle2">Released: {this.state.movie.year}</Typography>
          <StarRating rating={this.state.movie.rating}
                      starRatedColor="rgb(218,165,32)"
                      starDimension="30px"
                  />
          <Row className={style.author}>
            <a href="/about"><h6>Sai Donepudi</h6></a>
            <h6 style={{paddingLeft: '10px'}}>{this.state.movie.reviewDate}</h6>
          </Row>
        </div>
        <img className={style.poster} src={this.state.movie.image} alt="movie still"/>
      </Container>
    );
  }

  generateReview(){
    const movie = this.state.movie;
    try{
      var items = movie.review.split("\n");
      var ret = [];
      var count = 0;
      items.forEach((paragraph) =>{
        ret.push(
          <Row key={"paragraph" + count}>
            <p>{paragraph}</p>
            <br />
          </Row>
        );
        count++;
      });
      return ret;
    }
    catch(e){
      return [];
    }
  }

  renderBody(){
    return(
      <Container className={style.body} id="reviewBody">
        {this.generateReview()}
      </Container>
    );
  }

  render() {
    if(!this.isMovieEmpty()){
      return (
        <div id="reviewPage">
          <div  id="review">
            {this.renderHeader()}
            {this.renderBody()}
            <hr className={style.line}/>
          </div>
          <Credits title={this.state.movie.title} year={this.state.movie.year}/>
        </div>
      );
    }
    else{
      return(
        <Container className={style.centered} id="loading">
          <CircularProgress />
        </Container>
      )
    }
  }
}
