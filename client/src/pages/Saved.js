import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import API from "../utils/API"
import './search.css';
import SavedRestaurantResults from "../components/SavedRestaurantsResults";
import SavedEventsResults from "../components/SavedEventsResults";

class Saved extends Component {

    state = {
        foods: [],
        events: []
    }

    componentDidMount = () => {
        this.getSavedFoods();
        this.getSavedEvents();
    }

    getSavedFoods = () => {
        API.getFoods()
        .then(res => {this.setState({foods: res.data})
        }).catch(err => console.log(err))
    }

    deleteFood = foodData => {
        API.deleteFoods(foodData.id)
        .catch(err => console.log(err))
        window.location.reload()
    }

    getSavedEvents = () => {
        API.getEventsDB()
        .then(res => {this.setState({events: res.data})
        }).catch(err => console.log(err))
    }

    deleteEvents = eventData => {
        API.deleteEvents(eventData.id)
        .catch(err => console.log(err))
        window.location.reload()
    }

    render(){
        return (
            <>
            <Container id="main-container" className="glassy-text" >
            <Card>
                <Card.Header>
                    <h2 className="w-100 text-center mt-2">Places you'd like to go</h2>
                </Card.Header>
                <Card.Body>
                    <b>Restaurants</b>
                    {this.state.foods.length !== 0 ? (
                    <SavedRestaurantResults
                    results={this.state.foods}
                    deleteFood={this.deleteFood}
                />
                    ) : (
                        <p>Nothing saved!</p>
                    )}

                    </Card.Body>
                    </Card>
                    </Container>

            <Container id="main-container" className="glassy-text" >
            <Card>
                <Card.Header>
                    <h2 className="w-100 text-center mt-2">Events you would like to go to!</h2>
                </Card.Header>
                <Card.Body>
                    <b>Events</b>
                    {this.state.events.length !== 0 ? (
                    <SavedEventsResults
                    results={this.state.events}
                    deleteEvents={this.deleteEvents}
                />
                    ) : (
                        <p>Nothing saved!</p>
                    )}

                    </Card.Body>
                    </Card>
                    </Container>
                    </>
                    
        )
    }
}

export default Saved