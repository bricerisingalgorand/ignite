import React from 'react';
import {
  Container,
  Button,
  Table
} from "react-bootstrap";

export default function About(props) {
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
          <th>Balance</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Project 1</td>
          <td>134123412 usd</td>
          <td>123123123 usd</td>
        </tr>
        <tr>
          <td>Project 2</td>
          <td>134123412 usd</td>
          <td>123123123 usd</td>
        </tr>
        <tr>
          <td>Project 3</td>
          <td>134123412 usd</td>
          <td>123123123 usd</td>
        </tr>
        </tbody>
      </Table>
    </Container>
  )
}