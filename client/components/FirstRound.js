import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import data from '../../server/db/data.json';

export default class FirstRound extends Component {
  render() {
    const firstRound = data.slice(0, 10);
    console.log(firstRound);

    return (
      <Container className="container">
        <Card bg="light">
          <Card.Header>Round 1</Card.Header>
          {firstRound.map((el, idx) => (
            <Card.Body key={idx}>
              <Card.Title>Question #{idx + 1}</Card.Title>
              <Card.Text>{el.question}</Card.Text>
              {
                <div>
                  <input type="radio" id="huey" name="drone" value="huey" />
                  <label htmlFor="huey">Huey</label>
                </div>
              }
            </Card.Body>
          ))}
        </Card>
      </Container>
    );
  }
}
