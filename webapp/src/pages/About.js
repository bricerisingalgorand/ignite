import React from 'react';
import {
  Container,
  Button
} from "react-bootstrap";

export default function About(props) {
  return (
    <Container className="d-flex flex-column align-items-center">
      <img className="w-25 pt-2" src="ignite.jpg" />
      <h1 className="pt-2">Ignite</h1>
      <p>We are a crowdfunding platform built on block chain. We use Algorand smart contracts to create conditional, temporary accounts that either pay out when the funding goal is met, or return the funds to investors if the time limit runs out. This way, investors will be able to give new projects just the spark they need.. to ignite!</p>
    </Container>
  )
}