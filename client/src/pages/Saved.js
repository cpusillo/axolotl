import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Card } from 'react-bootstrap'
import API from "../utils/API"
import './search.css';
import SavedRestaurantResults from "../components/SavedRestaurantsResults";
import SavedEventsResults from "../components/SavedEventsResults";
import firebase from "../firebase";

class Saved extends Component {

    state = {
        foods: [],
        events: [],
        currentUser: ""
    }

    componentDidMount = () => {
        this.getSavedFoods();
        this.getSavedEvents();
        this.getCurrentUser();
    }

    getCurrentUser = () => {
        var user = firebase.auth().currentUser.email;
        console.log(user)
        this.setState({currentUser: user})
    }

    // === FOOD API CALLS === //

    getSavedFoods = () => {
        
        API.getFoods()
            .then(res => {
                this.setState({ foods: res.data })
            }).catch(err => console.log(err))
    }

    deleteFood = foodData => {
        API.deleteFoods(foodData.id)
            .catch(err => console.log(err))
        window.location.reload()
    }

    editFood = foodData => {
        API.editFoods(foodData.id, foodData.name)
        .catch(err => console.log(err))
    }

    // === EVENTS API CALLS === //

    getSavedEvents = () => {
        API.getEventsDB()
            .then(res => {
                this.setState({ events: res.data })                                                                             
            }).catch(err => console.log(err))
    }

    deleteEvents = eventData => {
        API.deleteEvents(eventData.id)
            .catch(err => console.log(err))
        window.location.reload()
    }

    editEvents = eventData => {
        API.editEvents(eventData.id, eventData.notes)
        .catch(err => console.log(err))
    }

    render() {
        return (

            <Container>
                <div class="row">
                    <div class="col">
                            <Card>
                                <Card.Header>
                                    <h2 className="w-100 text-center mt-2">Restaurants you want to eat at!</h2>
                                </Card.Header>
                                <Card.Body>
                                    <h4>Restaurants</h4>
                                    {this.state.foods.length !== 0 ? (
                                        <SavedRestaurantResults
                                            results={this.state.foods}
                                            deleteFood={this.deleteFood}
                                            editFood={this.editFood}
                                        />
                                    ) : (<p>No Restaurants Saved!</p>)}
                                </Card.Body>
                            </Card>
                     

                    </div>
                    <div class="col">
                       
                            <Card>
                                <Card.Header>
                                    <h2 className="w-100 text-center mt-2">Events you would like to go to!</h2>
                                </Card.Header>
                                <Card.Body>
                                    <h4>Events</h4>
                                    {this.state.events.length !== 0 ? (
                                        <SavedEventsResults
                                            results={this.state.events}
                                            deleteEvents={this.deleteEvents}
                                            editEvents={this.editEvents}
                                        />
                                        ) : (<p>No Events Saved</p>)}

                                </Card.Body>
                            </Card>
                       
                    </div>
                </div>
            </Container>


        )
    }
}

export default Saved