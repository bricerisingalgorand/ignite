import React, {useEffect, useState} from 'react';
import {
  Container,
  Button,
  Table
} from "react-bootstrap";
const fundService = require('../services/fundService.js')

export default function About(props) {

  const [funds, setFunds] = useState([]);

  useEffect(() => {
    // call api to fetch details
    // projectId is the projectId
    fundService.listFunds((data, err) => {
      if (err) {
        console.log(err)
      } else {
        setFunds(data)
      }
    })
  }, []);


  return (
    <Container>
      <h1>
        Projects
      </h1>
      <Table responsive>
        <thead>
        <tr>
          <th>Name</th>
          <th>Goal</th>
        </tr>
        </thead>
        <tbody>
        {funds.map((fund) => {
          return (
            <tr>
              <td><a href={`/project/${fund.id}`}>{fund.name}</a></td>
              <td>{`${fund.goalAmount} Algos`}</td>
            </tr>
           )
        })}
        </tbody>
      </Table>
    </Container>
  )
}