import React, {Component} from 'react';
import logo from '../images/logo.svg';
import './App.css';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(movies => this.setState({movies}))
  }

  render() {
    return (
      <div className="App">
        <p>Test text</p>
      </div>
    );
  }
}
