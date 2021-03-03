import React from 'react'
import { Container, Card, Button, InputGroup, FormControl, ProgressBar } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import "./splash.css"
import Footer from "../components/footer"
export default function Splash() {
  return (
    <>
    <Container className="splash">
      <h1>Axolotl</h1>
      <h5>Let us help you find something to do!!</h5>
      <p class ="lead">You and your friends will never have to figure out what to do again!
Search for local Eateries and/or Events to fight the boredom!</p>
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
    <Footer/>
</>
  )
}