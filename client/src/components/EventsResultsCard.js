import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoSaveSharp, IoLocationSharp, IoTicketSharp, IoTimeSharp } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import moment from 'moment';

import "./EventsResultsCard";


class EventsResultsCard extends Component {


    render() {
        return(
            <Card key={this.props.key}>
                <Card.Header>
                    <Row>
                    <h5>{this.props.title}</h5>
                    </Row>    

                    <Row>    
                        <Col>
                            
                            <img src={this.props.image} alt={this.props.title} class="img-rest" align="center"/>
                        </Col>
                        <Col>
                            <Button ><IoSaveSharp /></Button>
                        </Col>
                        
                    </Row>
                </Card.Header>
                <Row>
                    <Col>
                    <p><BsFillLightningFill/> Event Type: {this.props.type}</p>
                    <p><BsImage/> Venue Name: {this.props.venue}</p>
                    <p><IoLocationSharp/> Venue Address: {this.props.address}, {this.props.extended_address}</p>
                    </Col>
                    <Col>
                    <p><IoTimeSharp/>: {this.props.date}</p>
                    <a href={this.props.url} className="event-links" target="_blank"><IoTicketSharp/>Tickets/More Info</a>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default EventsResultsCard