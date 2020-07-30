import React, {Component} from 'react';
import { Paper, Grid } from "@material-ui/core";
import style from './latestReviews.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class latestReviews extends Component{

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

  renderCard(){
    return this.state.movies.map(movie =>{
      return(
        <Grid item>
          <Paper className={style.paper}>
            Test
          </Paper>
        </Grid>
      );
    });
  }

  render() {
    return (
      <div className={style.center}>
        <h1>Latest Movies</h1>
        <Grid justify="center" container spacing={4}>
          {this.renderCard()}
        </Grid>
      </div>
    );
  }
}
