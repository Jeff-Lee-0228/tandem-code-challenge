import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <Container className="container">
        <Card className="card" bg="light">
          <Card.Img
            className="landing-page-image"
            variant="top"
            src={'http://cdn.onlinewebfonts.com/svg/img_238906.png'}
          />
          <Card.Body>
            <Card.Title>Welcome to Tandem Trivia</Card.Title>
            <Card.Text>
              This is a simple trivia for your downtime. <br />
              Each round of trivia has 10 questions. <br />
              And all questions are multiple-choice questions. Let's check how
              smart you are!
            </Card.Text>
            <Button variant="primary">
              <Link className="begin-button" to="/first">
                Let's get started!
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
