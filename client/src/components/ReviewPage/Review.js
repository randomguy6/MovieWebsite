import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Review.module.css';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      apiResponse: ""
    }
  }

  componentDidMount(){
    let name = decodeURI(this.props.match.params.id);
    fetch("/review/"+name)
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
  }

  render() {
    let name = this.props.match.params.id;
    name = decodeURI(name);
    return (
      <div>
        <h2>This is the review page</h2>
        <p>Decoded URL: {name}</p>
        <p>From the backend: {this.state.apiResponse}</p>
      </div>
    );
  }
}
