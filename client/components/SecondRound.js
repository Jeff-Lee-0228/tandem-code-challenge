import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import data from '../../server/db/data.json';
import { Link } from 'react-router-dom';
import shuffle from './Shuffle';
import { connect } from 'react-redux';
import { submitSecondRound } from '../store';

class SecondRound extends Component {
  constructor() {
    super();
    this.state = { answer: {} };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const questions = data.filter((el) => el.incorrect.length === 3).slice(10);
    const option = questions.map((question) => {
      question.options = shuffle(question);
      return question;
    });
    this.setState({ questions: option });
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.submitSecondRound(this.state.answer);
  }

  handleChange(evt) {
    const key = evt.target.name;
    const value = evt.target.value;
    const answerUpdate = { answer: { ...this.state.answer, [key]: value } };
    this.setState(answerUpdate);
  }

  render() {
    console.log(this.state);
    const firstRound = this.state.questions;
    return !this.state.questions ? (
      <h1>Loading...</h1>
    ) : (
      <Container className="container">
        <Card bg="light">
          <Card.Header>Round 2</Card.Header>
          <form id="round1">
            {firstRound.map((el, idx) => (
              <Card.Body key={el.correct}>
                <Card.Title>Question #{idx + 11}</Card.Title>
                <Card.Text>
                  <strong>{el.question}</strong>
                </Card.Text>
                {el.options.map((answer) => (
                  <div key={answer}>
                    <input
                      type="radio"
                      id={answer}
                      name={el.question}
                      onChange={this.handleChange}
                      value={answer}
                    />
                    {'  '}
                    <label htmlFor={answer}>{answer}</label>
                  </div>
                ))}
              </Card.Body>
            ))}
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleClick}
              className="button"
            >
              <Link className="begin-button" to="/score">
                Finish
              </Link>
            </Button>
          </form>
        </Card>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    answer: state.secondRound,
  };
};

const mapDispatch = (dispatch) => {
  return {
    submitSecondRound: (answer) => dispatch(submitSecondRound(answer)),
  };
};

export default connect(mapState, mapDispatch)(SecondRound);
