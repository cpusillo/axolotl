import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoFastFood, IoLocationSharp, IoTimeSharp, IoCalendarSharp } from "react-icons/io5";
import {GiKnifeFork} from "react-icons/gi";

class EventsResultsCard extends Component {

    render() {
        return(
            <Card key={this.props.key}>
                <Card.Header>
                    <h3>{this.props.name}</h3>
                    <img src={this.props.thumb} />
                </Card.Header>
                <p><IoFastFood/> Cuisine: {this.props.cuisines}</p>
                <p><IoLocationSharp/> Address: {this.props.address}, {this.props.locality}, {this.props.city}</p>
                <p><IoTimeSharp/>Times: {this.props.timings}</p>
                <GiKnifeFork/> <a href={this.props.menu_url}>View Menu</a>
                <IoCalendarSharp/> <a href={this.props.events_url}>View Events</a>
            </Card>
        )
    }
}

export default EventsResultsCard