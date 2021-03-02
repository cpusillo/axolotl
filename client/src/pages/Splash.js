import React from 'react'
import { Container, Card, Button, InputGroup, FormControl, ProgressBar } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import "./splash.css"
export default function Splash() {
  return (
    <Container className="splash">
      <h1>Axolotl</h1>
      <h5>Never have a bad food & never feel alone! </h5>
      <p class="lead">
         Our app would help in looking-up for the events and restaurants near you and also saving them for future 
           access. 
      
      </p>

      <Link
        to="/signup"
      >
        <Button>
          Sign Up
            </Button></Link>
      <Link
        to="/login"
      >
        <Button>
          Login
</Button>            </Link>
    </Container>

  )
}