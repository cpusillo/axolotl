import React, { Component } from 'react'
import { Card, Row, Col, Button, Modal } from 'react-bootstrap'
import { IoFastFood, IoLocationSharp, IoTimeSharp, } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { FaTrashAlt, FaEdit } from "react-icons/fa"
import Edit from "./Edit"
import { Link, useHistory } from "react-router-dom";

class SavedRestaurantsResultsCard extends Component {

    deleteFood = () => {
       this.props.deleteFood(this.props)
    }

    render(){
        // console.log(this.props.id)
        return(
            <div>
            <Card key={this.props.id}>
            <Card.Header>
                <Row>
                <Col>
                <h3>{this.props.name}</h3>
                </Col>
                <Col className="text-right">
                    <Edit 
                        id ={this.props.id}
                    />
                {/* <Link to
                ={{
                    pathname: "/edit",
                    search: this.props.id
                }}> */}
                {/* <Button variant="light"><FaEdit /></Button></Link> */}
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
            <Row>
                <Col>
                <p>Notes: {this.props.notes}</p>
                </Col>
                <Col>
                <p>Reservation: {this.props.reservation}</p>
                </Col>
            </Row>

        </Card>


</div>
        )
    }
}

export default SavedRestaurantsResultsCard