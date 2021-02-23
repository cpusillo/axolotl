import React from 'react'
import { Container, Card, Button, InputGroup, FormControl, ProgressBar } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import "./search.css"
export default function Splash() {
    return (
        <Container className="splash">
            <h1>Axolotl</h1>
            <p class="lead">Start searching for restaurants and events near you!</p>
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