import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import data from '../../server/db/data.json';
import { Link } from 'react-router-dom';
import grades from './Grading';
import { connect } from 'react-redux';

class Score extends Component {
  render() {
    const submittedAnswer = {
      ...this.props.firstRound,
      ...this.props.secondRound,
    };
    const correctAnswers = data.map((el) => el.correct);
    const finalScore = grades(submittedAnswer, correctAnswers);
    return (
      <Container className="container">
        <Card bg="light">
          <Card.Header>Trivia Completed! </Card.Header>
          <Card.Body key="score">
            <Card.Title> Your score is : {finalScore} / 20 </Card.Title>
            <Card.Text>
              <strong>hi</strong>
            </Card.Text>
          </Card.Body>
          <Button variant="primary" type="button" className="button-home">
            <Link className="begin-button" to="/">
              Play again!
            </Link>
          </Button>
        </Card>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    firstRound: state.firstRound,
    secondRound: state.secondRound,
  };
};

export default connect(mapState)(Score);
