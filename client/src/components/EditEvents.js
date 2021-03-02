import React, {Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { FaPencilAlt } from "react-icons/fa"
import { IoSaveSharp } from "react-icons/io5";
import API from "../utils/API"
import axios from 'axios'

class EditEvents extends Component {
    state = {
        show: false,
        events: {}
    }

    componentDidMount() {
        console.log(this.props.id)
        const id = this.props.id
        axios.get("/api/events/"+ id)
        .then(res => {
            this.setState({events: res.data});
            console.log(this.state.events)
        })
    }

    // === Handlers for our modal, close and show === //

    handleClose = () => this.setState({show: false})
    handleShow = () => this.setState({show: true})



    handleChange = (e) => {
        const state = this.state.events
        state[e.target.name] = e.target.value;
        this.setState({events:state})

        console.log(this.state.events.notes)
    }


    handleFormSubmit = (e) => {
        API.editEvents(this.state.events._id, {
            notes: this.state.events.notes
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
              <Modal.Title>Edit Record for: {this.state.events.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group id="notes">
                        <small>Notes: </small>
                    <Form.Control   type="name" 
                                    name="notes"
                                    placeholder={this.state.events.notes}
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

export default EditEvents