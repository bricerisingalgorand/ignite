import React, {useEffect, useState} from 'react';
import {
  Container,
  Button, Form, Col
} from "react-bootstrap";
import {useParams, withRouter} from "react-router-dom";

function Project(props) {
  const { projectId } = useParams();

  const [amt, setAmt] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(amt) // use these as fields
  }

  useEffect(() => {
    // call api to fetch details
    // projectId is the projectId
  }, []);
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
      <Form onSubmit={onSubmit}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Amount
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Amount"
              onChange={(e) => setAmt(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Invest
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}

export default Project;