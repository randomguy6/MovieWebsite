import React, {Component} from 'react';
import CustomCarousel from "./Carousel/Carousel";
import './App.css';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div>
        <CustomCarousel />
      </div>
    );
  }
}
