import React, {Component} from 'react';
import { Container, Row } from "reactstrap";
import style from "./Credits.module.css"
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

  render() {
    // console.log("props in credits: ", this.props)
    // console.log("title in props: ", this.props.title)
    // console.log("year in props: ", this.props.year)
    if(this.state.movie.title === undefined){
        return(
            <p>Loading...</p>
        );
    }
    else{
        return (
            <Container>
                <Row className={style.centered}>
                  <p>Just a friendly paragraph</p>
                  <p>Current movie {this.state.movie.title}</p>
                </Row>
            </Container>
        );
    }
  }
}
