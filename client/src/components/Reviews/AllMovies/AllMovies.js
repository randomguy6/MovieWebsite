import React, {Component} from 'react';
// import { Typography, /*Paper, */Grid } from "@material-ui/core";
import style from './AllMovies.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AllMovies extends Component{

//   constructor(props){
//     super(props)
//   }

    render() {
    if(1 !== 2){
        return(
            <p>Loading...</p>
        );
    }
    else{
      return (
        <div className={style.center}>
          <h1>All Reviews Page</h1>
        </div>
      );
    }
  }
}
