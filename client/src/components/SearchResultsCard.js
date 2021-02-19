import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoFastFood, IoLocationSharp, IoTimeSharp, IoSaveSharp } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import {FaStar} from "react-icons/fa"
import "./SearchResultsCard.css"

class SearchResultsCard extends Component {
    saveFoods = () => {
        this.props.saveFoods(this.props)
    }

    render() {
        return(
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <h3>{this.props.name}</h3>
                            <p><FaStar/> {this.props.rating}</p>
                        </Col>
                        <Col className="text-right">
                            <Button onClick={this.saveFoods}><IoSaveSharp /></Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card></Card>
                <Row>
                    <Col>
                    <p><IoFastFood/>: {this.props.cuisines}</p>
                    <p><IoLocationSharp/>: {this.props.address}, {this.props.locality}, {this.props.city}</p>
                    </Col>
                    <Col>
                    <p><IoTimeSharp/>: {this.props.timings}</p>
                    <a href={this.props.menu_url} className="food-links" target="_blank" rel="noopener noreferrer"><GiKnifeFork/>  Menu</a>
                    
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default SearchResultsCard