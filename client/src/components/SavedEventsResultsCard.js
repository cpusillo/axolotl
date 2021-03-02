import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoLocationSharp, IoTicketSharp, IoTimeSharp } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa"
import { CgNotes } from "react-icons/cg";
import moment from 'moment';
import EditEvents from "./EditEvents";



class SavedEventsResultsCard extends Component {

    deleteEvents = () => {
       this.props.deleteEvents(this.props)
    }
    
    render(){
        console.log(this.props.notes)
        return(
            <Card key={this.props.id}>
            <Card.Header>
                <Row className="text-center">
                <h5>{this.props.title}</h5>
                </Row>
                <br></br>
                <Row>
                <Col className="text-center">
                <EditEvents 
                        id ={this.props.id}
                    />
                <Button variant="danger" onClick={this.deleteEvents}><FaTrashAlt/></Button>
                </Col>
                </Row>
                <hr></hr>
                <Row>
                <Col>
                <p><CgNotes/>
                <span style={{fontWeight: "bold"}}>
                     Notes: </span> {this.props.notes}</p>
                </Col>
                
            </Row>
            </Card.Header>
            <Row>
                    <Col>
                    <p><BsFillLightningFill/> <span style={{fontWeight: "bold"}}>Event Type:</span> {this.props.type.replace(/_/g, " ").toUpperCase()}</p>
                    <p><BsImage/> <span style={{fontWeight: "bold"}}>Venue Name: </span> {this.props.venue}</p>
                    <p><IoLocationSharp/> <span style={{fontWeight: "bold"}}>Venue Address: </span> {this.props.address}, {this.props.extended_address}</p>
                    </Col>
                    <Col>
                    <p><IoTimeSharp/><span style={{fontWeight: "bold"}}>Date/Time: </span> {moment(this.props.date).format("LLLL")}</p>
                    <a href={this.props.url} className="event-links" target="_blank" rel="noopener noreferrer"><IoTicketSharp/><span style={{fontWeight: "bold"}}>Tickets/More Info </span></a>
                    </Col>
                </Row>
                <hr></hr>
                
        </Card>
        
        )
    }
}

export default SavedEventsResultsCard