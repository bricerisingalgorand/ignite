import React from 'react';
import {
  Container,
  Button
} from "react-bootstrap";

export default function About(props) {
  return (
    <Container className="d-flex flex-column align-items-center">
      <img className="w-25" src="https://thumbs.dreamstime.com/b/fire-flame-icon-isolated-bonfire-sign-emoticon-symbol-white-emoji-logo-illustration-vector-142833014.jpg" />
      <h1>Ignite</h1>
      <p>Ignite is a ....</p>
    </Container>
  )
}