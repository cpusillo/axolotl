import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import API from "../utils/API"
import './search.css';
import SavedRestaurantResults from "../components/SavedRestaurantsResults"

class Saved extends Component {

    state = {
        foods: []
    }

    componentDidMount = () => {
        this.getSavedFoods();
    }

    getSavedFoods = () => {
        API.getFoods()
        .then(res => {this.setState({foods: res.data})
        }).catch(err => console.log(err))
    }

    deleteFood = foodData => {
        API.deleteFoods(foodData.id)
        .catch(err => console.log(err))
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
                    </>
        )
    }
}

export default Saved