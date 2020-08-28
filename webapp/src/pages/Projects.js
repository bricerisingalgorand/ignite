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
          <td><a href={"/project/1"}>Project 1</a></td>
          <td>134123412 usd</td>
          <td>123123123 usd</td>
        </tr>
        <tr>
          <td><a href={"/project/2"}>Project 2</a></td>
          <td>134123412 usd</td>
          <td>123123123 usd</td>
        </tr>
        <tr>
          <td><a href={"/project/3"}>Project 3</a></td>
          <td>134123412 usd</td>
          <td>123123123 usd</td>
        </tr>
        </tbody>
      </Table>
    </Container>
  )
}