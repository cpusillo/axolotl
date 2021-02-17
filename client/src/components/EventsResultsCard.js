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
                    <h4><span style={{fontWeight: "bold"}}>{this.props.title}</span></h4>
                    </Row>    

                    <Row>    
                        <Col>
                            
                            <img src={this.props.image}  alt={this.props.title} class="img-rest" align="center"/>
                        </Col>
                        <Col>
                            <Button ><IoSaveSharp /></Button>
                        </Col>
                        
                    </Row>
                </Card.Header>
                <Row>
                    <Col>
                    <p><BsFillLightningFill/> <span style={{fontWeight: "bold"}}>Event Type:</span> {this.props.type}</p>
                    <p><BsImage/> <span style={{fontWeight: "bold"}}>Venue Name: </span> {this.props.venue}</p>
                    <p><IoLocationSharp/> <span style={{fontWeight: "bold"}}>Venue Address: </span> {this.props.address}, {this.props.extended_address}</p>
                    </Col>
                    <Col>
                    <p><IoTimeSharp/><span style={{fontWeight: "bold"}}>Date/Time: </span> {moment(this.props.date).format("LLLL")}</p>
                    <a href={this.props.url} className="event-links" target="_blank"><IoTicketSharp/><span style={{fontWeight: "bold"}}>Tickets/More Info </span></a>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default EventsResultsCard