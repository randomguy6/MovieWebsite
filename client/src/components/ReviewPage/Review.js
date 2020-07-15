import React, {Component} from 'react';
import { Container, Row } from "reactstrap";
import StarRating from "react-star-ratings";
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

  renderHeader(){
    return(
      <Container className={style.header} id="reviewHeader">
        <h1>{this.state.movie.title}</h1>
        <StarRating rating={this.state.movie.rating}
                    starRatedColor="rgb(218,165,32)"
                    starDimension="30px"
                />
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
        {/* <p>{this.state.movie.review}</p> */}
        {this.generateReview()}
      </Container>
    );
  }

  render() {
    return (
      <Container className={style.centered} id="review">
        {this.renderHeader()}
        {this.renderBody()}
      </Container>
    );
  }
}
