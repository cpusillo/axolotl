import React, {Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { FaPencilAlt } from "react-icons/fa"
import { IoSaveSharp } from "react-icons/io5";
import API from "../utils/API"
import axios from 'axios'

class Edit extends Component {
    state = {
        show: false,
        foods: {}
    }

    componentDidMount() {
        const id = this.props.id
        axios.get("/api/foods/"+ id)
        .then(res => {
            this.setState({foods: res.data});
        })
    }

    // === Handlers for our modal, close and show === //

    handleClose = () => this.setState({show: false})
    handleShow = () => this.setState({show: true})



    handleChange = (e) => {
        const state = this.state.foods
        state[e.target.name] = e.target.value;
        this.setState({foods:state})
    }


    handleFormSubmit = (e) => {
        API.editFoods(this.state.foods._id, {
            name: this.state.foods.name,
            reservation: this.state.foods.reservation,
            notes: this.state.foods.notes
        })
    }


render() {

    // console.log(`Currently editing record: ${this.state.id}`)
    return (
        <>
          <Button variant="light" onClick={this.handleShow}>
           <FaPencilAlt />
          </Button>
    
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Record for: {this.state.foods.name} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group id="reservation">
                    <small>Reservation: </small>
                    <Form.Control   type="name" 
                                    name="reservation"
                                    placeholder={this.state.foods.reservation}
                                    onChange={this.handleChange} />
                </Form.Group>

                <Form.Group id="notes">
                    <small>Notes: </small>
                    <Form.Control   type="name" 
                                    name="notes"
                                    placeholder={this.state.foods.notes}
                                    onChange={this.handleChange}/>
                </Form.Group>

                <Button className="w-100" type="submit" variant="success"><IoSaveSharp /></Button>
            </Form>
            </Modal.Body>
          </Modal>
        </>
      );
    }
}

export default Edit