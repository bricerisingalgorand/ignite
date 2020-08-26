import React from 'react';
import {
  Container,
  Button
} from "react-bootstrap";

export default function Project(props) {
  return (
    <Container>
      <h1>
        Project name
      </h1>
      <div className="d-flex flex-row">
        <div className="m-3">
          <p>Goal</p>
          <p>10000 USD</p>
        </div>
        <div className="m-3">
          <p>Balance</p>
          <p>10000 USD</p>
        </div>
      </div>
      <p>
        fjlkasdjflkasdjflsakdfj asjfklasdjflkasdjflaksd falskjflaksjfklasj faljflkajsflkajflkajf ajflkajflkasjkfla fjalkdsjfkajflkasjfl ajflkajflasfaklfjasklf asjflkajfl alkfjal fk
      </p>
    </Container>
  )
}