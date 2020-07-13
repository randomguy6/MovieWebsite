import React, {Component} from 'react';
import { Paper, Card, Typography } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel'
import './OtherPage.css';

export default class OtherPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    };
  }

  render() {
    return (
        <div id="carousel">
          {console.log("This is used to get the id of the url", this.props.match.params.id)}
          <Carousel timer={1000} animation="fade" navButtonsAlwaysVisible="true">
            <div className="Paper">
              <Paper elevation={5}>
                <div class="row">
                  <div class="col">
                    <img src="https://bloody-disgusting.com/wp-content/uploads/2019/04/Wicker-Man-e1556216964674.jpg"/>
                  </div>
                  <div class="col">
                    <Typography align="center" color="primary" variant="h5">Meh</Typography>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="Paper">
              <Paper elevation={5}>
                <Typography align="center" color="primary" variant="h5">Seth</Typography>
              </Paper>
            </div>
          </Carousel>
        </div>
    );
  }
}
