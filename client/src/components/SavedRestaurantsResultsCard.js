import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { IoFastFood, IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa"

class SavedRestaurantsResultsCard extends Component {

    deleteFood = () => {
       this.props.deleteFood(this.props)
    }
    
    render(){
        console.log(this.props.id)
        return(
            <Card key={this.props.id}>
            <Card.Header>
                <Row>
                <Col>
                <h3>{this.props.name}</h3>
                </Col>
                <Col className="text-right">
                <Button variant="light"><FaPencilAlt/></Button>
                <Button variant="danger" onClick={this.deleteFood}><FaTrashAlt/></Button>
                </Col>
                        
                </Row>
            </Card.Header>
            <Row>
                <Col>
                <p><IoFastFood/>: {this.props.cuisines}</p>
                <p><IoLocationSharp/>: {this.props.address}</p>
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

export default SavedRestaurantsResultsCard