import React from 'react';
import {
  Container, Col,
  Button, FormControl, Form
} from "react-bootstrap";

export default function About(props) {
  return (
    <Container>
      <h1>
        Register
      </h1>
      <Form>
        <Form.Group>
          <Form.Label>Project Name</Form.Label>
          <Form.Control placeholder="Enter project name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Row>
          <Form.Group>
            <Form.Label>Goal Amount</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Currency</Form.Label>
            <Form.Control as="select" defaultValue="Currency">
              <option>USD</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Project Account</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Timelimit</Form.Label>
          <Form.Control />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}