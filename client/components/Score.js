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
    const submittedAnswer = this.props.submitRound;
    const correctAnswers = data.map((el) => el.correct);
    const finalScore = grades(submittedAnswer, correctAnswers);
    return (
      <Container className="container">
        <Card bg="light">
          <Card.Header>Trivia Completed! </Card.Header>
          <Card.Img
            className="score-image"
            variant="top"
            src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/7795702121539683258-512.png"
          />
          <Card.Body key="score">
            <Card.Title>
              {' '}
              <b>Your score is : {finalScore} / 10</b>{' '}
            </Card.Title>
            {(() => {
              switch (finalScore) {
                case 6 - 9:
                  return (
                    <Card.Text>
                      <b>Almost there.</b>
                    </Card.Text>
                  );
                case 10:
                  return (
                    <Card.Text>
                      <b>Congratulations. You are very smart!</b>
                    </Card.Text>
                  );
                default:
                  return (
                    <Card.Text>
                      <b>Why don't you play again?</b>
                    </Card.Text>
                  );
              }
            })()}
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
    submitRound: state.submitRound,
  };
};

export default connect(mapState)(Score);
