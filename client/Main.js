import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Score from './components/Score';
import NoneFound from './components/NoneFound';
import Round from './components/Round';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/round" component={Round} />
          <Route path="/score" component={Score} />
          <Route component={NoneFound} />
        </Switch>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    submitRound: state.submitRound,
  };
};

export default withRouter(connect(mapState)(Main));
