import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoFastFood, IoLocationSharp, IoTimeSharp, IoCalendarSharp, IoSaveSharp } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import "./SearchResultsCard.css"

class SearchResultsCard extends Component {


    render() {
        return(
            <Card key={this.props.key}>
                <Card.Header>
                    <Row>
                        <Col>
                            <h3>{this.props.name}</h3>
                            <img src={this.props.thumb} alt={this.props.name} class="img-rest"/>
                        </Col>
                        <Col>
                            <Button><IoSaveSharp /></Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Row>
                    <Col>
                    <p><IoFastFood/>: {this.props.cuisines}</p>
                    <p><IoLocationSharp/>: {this.props.address}, {this.props.locality}, {this.props.city}</p>
                    </Col>
                    <Col>
                    <p><IoTimeSharp/>: {this.props.timings}</p>
                    <a href={this.props.menu_url} className="food-links" target="_blank"><GiKnifeFork/>  Menu</a>
                    <a href={this.props.events_url} className="food-links"><IoCalendarSharp/>  Events</a>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default SearchResultsCard