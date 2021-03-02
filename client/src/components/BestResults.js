import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { IoFastFood, IoLocationSharp, IoTimeSharp, IoSaveSharp } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import {FaStar} from "react-icons/fa"
import "./BestResults.css"

class BestResults extends Component{

    saveFoods = () => {
        this.props.saveFoods(this.props)
    }

    render(){
        console.log(this.props.results)
        return (
            <div className="BestResults">
                <h3>Best Results</h3>
            {this.props.results.map((r) => (
                <Card key={r.restaurant.R.id}>
                    <Card.Header>
                        <Row>
                            <Col>
                                <h3>{r.restaurant.name}</h3>
                                <p><FaStar/> {r.restaurant.user_rating.aggregate_rating}</p>
                            </Col>
                            <Col className="text-right">
                                <Button onClick={this.saveFoods}><IoSaveSharp /></Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Row>
                        <Col>
                        <p><IoFastFood/>: {r.restaurant.cuisines}</p>
                    <p><IoLocationSharp/>: {r.restaurant.location.address}, {r.restaurant.location.locality}, {r.restaurant.location.city}</p>
                    </Col>
                    <Col>
                    <p><IoTimeSharp/>: {r.restaurant.timings}</p>
                    <a href={r.restaurant.menu_url} className="food-links" target="_blank" rel="noopener noreferrer"><GiKnifeFork/>  Menu</a>
                        </Col>
                    </Row>
                </Card>
            )
            )} 


                </div>
        ) // return
    }
}


export default BestResults
