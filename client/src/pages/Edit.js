import React, {Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { IoSaveSharp } from "react-icons/io5";
import API from "../utils/API"
import axios from 'axios'
import { Link, useHistory, useParams, withRouter } from "react-router-dom";

class Edit extends Component {
    state = {
        foods: {}
    }

    componentDidMount() {
        console.log(this.props.location.search)
        var id = this.props.location.search;
        id = id.substring(1);
        console.log(id)
        axios.get("/api/foods/"+ id)
        .then(res => {
            this.setState({foods: res.data});
            console.log(this.state.foods)
        })
    }



render() {
    return (
        <>
         <Container className="white">
         <Form onSubmit={this.handleFormSubmit}>
                <Form.Group id="name">
                    <small>Restaurant Name: </small>
                    <Form.Control type="name" name="name" placeholder="New Restaraunt Name" value={this.state.foods.name} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group id="reservation">
                    <small>Reservation: </small>
                    <Form.Control type="name" name="reservation" placeholder="June 6th 2021" value={this.state.foods.reservation} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group id="notes">
                    <small>Notes: </small>
                    <Form.Control type="name" name="notes" placeholder="Delicious breadsticks!" onChange={this.handleChange}/>
                </Form.Group>

                <Button className="w-100" type="submit" variant="success"><IoSaveSharp /></Button>
            </Form>
         </Container>
        </>
      );
    }
}

export default withRouter(Edit)