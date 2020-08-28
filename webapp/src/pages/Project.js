import React, {useEffect, useState} from 'react';
import {
  Container,
  Button, Form, Col
} from "react-bootstrap";
import {useParams, withRouter} from "react-router-dom";
const fundService = require('../services/fundService.js')

function Project(props) {
  const { projectId } = useParams();

  const [amt, setAmt] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [goal, setGoal] = useState("");
  const [bal, setBal] = useState("");
  const [curr, setCurr] = useState("");
  const [acct, setAcct] = useState("");
  const [time, setTime] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(amt, acct) // use these as fields
    const investment = fundService.investmentBuilder(projectId, acct, amt)
    fundService.investInFund(investment, () => {})
  }

  function handleClaim() {
    // code to claim
  }

  useEffect(() => {
    // call api to fetch details
    // projectId is the projectId
    fundService.getFund(projectId, (data, err) => {
      if (err) {
        console.log(err)
      } else {
        setName(data.name)
        setDesc(data.description)
        setGoal(data.goalAmount)
      }
    })

    fundService.getBalance(projectId, (data, err) => {
      setBal(data)
    })
  }, []);

  return (
    <Container>
      <h1 className="pt-2">
        {name}
      </h1>
      <div className="d-flex flex-row">
        <div className="m-3">
          <p>Goal</p>
          <p>{`${goal} Algos`}</p>
        </div>
        <div className="m-3">
          <p>Balance</p>
          <p>{`${bal} Algos`}</p>
        </div>
        <div className="m-3">
          <Button style={{marginTop: '2rem'}} onClick={handleClaim}>
            Claim
          </Button>
        </div>
      </div>
      <p>
        {desc}
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
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Acct
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="InvestorAddress"
              onChange={(e) => setAcct(e.target.value)}
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