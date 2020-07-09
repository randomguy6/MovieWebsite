import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import OtherPage from "./OtherPage";
import Navigation from "./Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component{

  render() {
    return (
      <div>
        <Navigation />
        <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/other/:id" component={OtherPage} />
          </Switch>
        </div>
    </BrowserRouter>
      </div>
    );
  }
}
