import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import FirstRound from './components/FirstRound';
import LandingPage from './components/LandingPage';
import SecondRound from './components/SecondRound';
import ThirdRound from './components/ThirdRound';
import Score from './components/Score';
import NoneFound from './components/NoneFound';

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/first" component={FirstRound} />
          <Route path="/second" component={SecondRound} />
          <Route path="/third" component={ThirdRound} />
          <Route path="/score" component={Score} />
          <Route component={NoneFound} />
        </Switch>
      </div>
    );
  }
}
