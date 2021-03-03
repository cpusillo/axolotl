import React, { Component } from 'react'
import { Card, Button, Row, Col, Overlay, Popover } from 'react-bootstrap'
import { IoSaveSharp, IoLocationSharp, IoTicketSharp, IoTimeSharp } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import moment from 'moment';

import "./EventsResultsCard";


class EventsResultsCard extends Component {
    state ={
        showPopover: false,
    };

    popoverContainer = React.createRef();
    popoverButton = React.createRef();
    saveEvents = () => {
        this.props.saveEvents(this.props)
    };

    saveEvents = () => {
        this.props.saveEvents(this.props);
        this.setState({showPopover:!this.state.showPopover})
    };

    render() {
        return(
            <Card key={this.props.key}>
                <Card.Header>
                    <Row>
                    <h4><span style={{fontWeight: "bold"}}>{this.props.title}</span></h4>
                   
                    </Row>    

                    <Row>    
                        <Col>
                            <img src={this.props.image}  alt={this.props.title}/>
                        </Col>
                        <Col className = "text-right">
                         <Button onClick={this.saveEvents}><div ref = {this.popoverButton}><IoSaveSharp /></div></Button>
                         <Overlay
                         target = {this.popoverButton.current}
                         container={this.popoverContainer.current}
                         show={this.state.showPopover}>
                             <Popover>
                                 <Popover.Title as ="h3">Event Saved!</Popover.Title>
                             </Popover>
                         </Overlay>
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
            </Card>
        )
    }
}

export default EventsResultsCard