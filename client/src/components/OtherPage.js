import React, {Component} from 'react';
import ranImage from '../images/MoreMemes.png';
import { Link } from "react-router-dom";
import './App.css';

export default class OtherPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    };
  }

  render() {
    return (
        <div id="somePage">
            <img src={ranImage} className="Meme" alt="meme" />
            <p>Testing other page works </p>
            {console.log(this.props.match.params.id)}
            <Link to="/">Home</Link>
        </div>
    );
  }
}
