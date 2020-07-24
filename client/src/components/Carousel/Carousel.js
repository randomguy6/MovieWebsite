import React, {Component} from 'react';
import { Button, Row, Col, Container } from "reactstrap"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import StarRating from "react-star-ratings"
import style from "./Carousel.module.css"

export default class CustomCarousel extends Component{

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

  renderCards(){
    let items = [];
    this.state.movies.forEach((movie) => {
      items.push(
        <div key={movie.title + " card"} className="text-center">
          <Paper elevation={5}>
            <Row>
              <Col>
                <img style={{width: "100%", padding: "25px"}}src={movie.image} alt={movie.title+ " Scene"}/>
              </Col>
              <Col style={{padding: '25px'}}>
                <h3>{movie.title} ({movie.year})</h3>
                <StarRating rating={movie.rating}
                  starRatedColor="rgb(218,165,32)"
                />
                <Row style={{padding: '20px'}}>
                  <Button outline color="warning" className={style.centered} href={"/review/" + movie.title}>View Review</Button>
                </Row>
              </Col>
            </Row>
          </Paper>
        </div>
      );
    });
    return items;
  }

  renderCarousel(){
    return(
      <Container classs="carousel">
        <Carousel className={style.Carousel}
                  startAt={0} 
                  timer={1000} 
                  animation="fade" 
                  navButtonsAlwaysVisible="true"
                  autoPlay="false"
                  >
          {this.renderCards()}
        </Carousel>
      </Container>
    );
  }

  render() {
    if(this.state.movies.length !== 0){
      return (
        <div id="homePage">
          {this.renderCarousel()}
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
