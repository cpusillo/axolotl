import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoSaveSharp, IoLocationSharp, IoTicketSharp, IoTimeSharp } from "react-icons/io5";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

import { VscSymbolEvent } from "react-icons/vsc";


class EventsResultsCard extends Component {


    render() {
        return(
            <Card key={this.props.key}>
                <Card.Header>
                    <Row>
                        <Col>
                            <h5>{this.props.title}</h5>
                            <img src={this.props.image} alt={this.props.name} class="img-rest"/>
                        </Col>
                        <Col>
                            <h5><HiOutlineOfficeBuilding/>:{this.props.venue}</h5>
                            <Button ><IoSaveSharp /></Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Row>
                    <Col>
                    <p><VscSymbolEvent/>: {this.props.type}</p>

                    <p><IoLocationSharp/>: {this.props.address}, {this.props.extended_address}</p>
                    </Col>
                    <Col>
                    <p><IoTimeSharp/>: {this.props.date}</p>
                    <a href={this.props.url} className="event-links" target="_blank"><IoTicketSharp/>Tickets</a>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default EventsResultsCard