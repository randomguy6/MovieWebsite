import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home";
import OtherPage from "./OtherPage";
import Navigation from "./Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component{

  render() {
    return (
      <div>
        <Router>
          <Navigation/>
          <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/other/:id" component={OtherPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
