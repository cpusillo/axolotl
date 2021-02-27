import React, { Component } from 'react'
import { Card, Row, Col, Button, Modal } from 'react-bootstrap'
import { IoFastFood, IoLocationSharp, IoTimeSharp, } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import Edit from "./Edit";
import { Link, useHistory } from "react-router-dom";

class SavedRestaurantsResultsCard extends Component {

    deleteFood = () => {
       this.props.deleteFood(this.props)
    }

    render(){
        // console.log(this.props.id)
        return(
            <Card key={this.props.id}>
            <Card.Header>
                <Row>
                <Col className="text-center">
                <h5>{this.props.name}</h5>
                <br></br>
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
                <hr></hr>
                <Row>
                <Col>
                <p><CgNotes/><span style={{fontWeight: "bold"}}> Notes: </span> {this.props.notes}</p>
                </Col>
                <Col>
                <p><span style={{fontWeight: "bold"}}> Reservations: </span> {this.props.reservation}</p>
                </Col>
            </Row>
            </Card.Header>
            <Row>
                <Col>
                <p><IoFastFood/><span style={{fontWeight: "bold"}}> Cusine Type:</span> {this.props.cuisines}</p>
                <p><IoLocationSharp/> <span style={{fontWeight: "bold"}}> Address: </span> {this.props.address}</p>
                </Col>
                <Col>
                <p><IoTimeSharp/> <span style={{fontWeight: "bold"}}> Hours: </span>{this.props.timings}</p>
                <a href={this.props.menu_url} className="food-links" target="_blank" rel="noopener noreferrer"><GiKnifeFork/>  <span style={{fontWeight: "bold"}}> Menu </span></a>
                
                </Col>
            </Row>
            

        </Card>



        )
    }
}

export default SavedRestaurantsResultsCard