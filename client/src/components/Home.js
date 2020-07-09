import React, {Component} from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    };
    this.componentWillMount();
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.apiResponse}</p>
        <Link to="/other">OtherPage</Link>
      </div>
    );
  }
}
