import React, {useState} from 'react';
import {
  Container, Col,
  Button, FormControl, Form
} from "react-bootstrap";
const fundService = require('../services/fundService.js')

export default function About(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [goal, setGoal] = useState("");
  const [curr, setCurr] = useState("");
  const [acct, setAcct] = useState("");
  const [time, setTime] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(name, desc, goal, acct, time) // use these as fields
    const fund = fundService.fundBuilder(name, desc, parseInt(time), parseInt(goal), acct);
    fundService.createFund(fund, ()=>{});
  }

  return (
    <Container>
      <h1 className="pt-2">
        Register
      </h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Project Name</Form.Label>
          <Form.Control placeholder="Enter project name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={(e) => setDesc(e.target.value)}/>
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="goal">
            <Form.Label>Goal Amount</Form.Label>
            <Form.Control onChange={(e) => setGoal(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="cur">
            <Form.Label>Currency</Form.Label>
            <Form.Control as="select" defaultValue="Currency" onChange={(e) => setCurr(e.target.value)}>
              <option>USD</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="acct">
          <Form.Label>Project Account</Form.Label>
          <Form.Control onChange={(e) => setAcct(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="time">
          <Form.Label>Timelimit</Form.Label>
          <Form.Control onChange={(e) => setTime(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}