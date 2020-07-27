import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home";
import OtherPage from "./OtherPage/OtherPage";
import Navigation from "./Navigation/Navigation";
import Review from "./ReviewPage/Review";
import About from "./About/About";
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component{

  render() {
    return (
      <div>
        <div id="mainApp">
          <Router>
            <Navigation/>
            <div id="switches">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/other/:id" component={OtherPage} />
                  <Route exact path="/review/:id" component={Review} />
                  <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}
