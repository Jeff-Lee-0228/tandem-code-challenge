import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import data from '../../server/db/data.json';
import { Link } from 'react-router-dom';
import shuffleOptions from './ShuffleOptions';
import shuffleQuestion from './ShuffleQuestions';
import { connect } from 'react-redux';
import { submitRound, doResetRound } from '../store';

class Round extends Component {
  constructor() {
    super();
    this.state = { answer: {}, count: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const questions = shuffleQuestion(data);
    const option = questions.map((question) => {
      question.options = shuffleOptions(question);
      return question;
    });
    this.setState({ questions: option });
  }

  handleClick(evt) {
    evt.preventDefault();
    const count = this.state.count + 1;
    if (this.state.count === 10) {
      this.props.doResetRound();
    } else {
      this.props.submitRound(this.state.answer);
    }
    this.setState({ count: count, answer: {} });
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({ answer: value });
  }

  render() {
    const round = this.state.questions;
    return !this.state.questions ? (
      <h1>Loading...</h1>
    ) : (
      <Container className="container">
        <Card bg="light">
          <Card.Header> Question ({this.state.count + 1} / 10) </Card.Header>
          <Card.Body>
            <Card.Title>Question #{this.state.count + 1}</Card.Title>
            <Card.Text>{round[`${this.state.count}`].question}</Card.Text>
            {round[`${this.state.count}`].options.map((answer) => (
              <div key={answer}>
                <input
                  type="radio"
                  id={answer}
                  name={round[`${this.state.count}`].question}
                  onChange={this.handleChange}
                  disabled={!!this.state.answer.length}
                  value={answer}
                />
                {'  '}
                <label htmlFor={answer}>{answer}</label>
              </div>
            ))}
            {this.state.answer === round[`${this.state.count}`].correct && (
              <Card.Text className="answer-correct">Correct!</Card.Text>
            )}
            {this.state.answer.length &&
              this.state.answer !== round[`${this.state.count}`].correct && (
                <div>
                  <Card.Text className="answer-incorrect">Incorrect!</Card.Text>
                  <Card.Text className="answer">
                    Correct answer is : {round[`${this.state.count}`].correct}
                  </Card.Text>
                </div>
              )}
            {this.state.count < 9 ? (
              <Button
                variant="primary"
                type="button"
                onClick={this.handleClick}
                className="button"
              >
                {' '}
                Next
              </Button>
            ) : (
              <Button
                variant="primary"
                type="button"
                onClick={this.handleClick}
                className="button"
              >
                <Link className="begin-button" to="/score">
                  Result
                </Link>
              </Button>
            )}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    submitRound: (answer) => dispatch(submitRound(answer)),
    doResetRound: () => dispatch(doResetRound()),
  };
};

export default connect(null, mapDispatch)(Round);
