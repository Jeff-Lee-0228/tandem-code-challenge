import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import FirstRound from './components/FirstRound';
import LandingPage from './components/LandingPage';
import SecondRound from './components/SecondRound';
import Score from './components/Score';
import NoneFound from './components/NoneFound';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/first" component={FirstRound} />
          <Route path="/second" component={SecondRound} />
          <Route path="/score" component={Score} />
          <Route component={NoneFound} />
        </Switch>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    firstRound: state.firstRound,
    secondRound: state.secondRound,
  };
};

export default withRouter(connect(mapState, null)(Main));
