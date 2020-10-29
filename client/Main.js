import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import FirstRound from './components/FirstRound';
import LandingPage from './components/LandingPage';

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <h1>Welcome to Code Challenge</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/first" component={FirstRound} />
          {/* <Route path="/2" component={SecondRound} />
        <Route path="/3" component={ThirdRound} />
      <Route path="/score" component={Score} /> */}
        </Switch>
      </div>
    );
  }
}
