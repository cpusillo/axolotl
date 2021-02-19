import React, { Component } from 'react'
import { Container, Card, Button, InputGroup, FormControl, ProgressBar } from 'react-bootstrap'
import { FaSearchLocation, FaCheckSquare } from 'react-icons/fa'
import API from "../utils/API"
import SearchResults from "../components/SearchResults"
import EventsResults from "../components/EventsResults"
import './search.css';

class Search extends Component {
    state = { 
        food: [],
        events: [],
        query: "",
        lat: "",
        lon: ""     
    }

    componentDidMount(){
        this.getLocation();
    }
    
    // ==== OnClick Handlers ==== //

    handleButtonClick = () => {
        // console.log(this.state.latitude)
        // this.loadRestaurants(this.state.latitude, this.state.longitude);
        this.loadEvents();
    }
    // ==== API CALLS ==== //
    
    // ZOMATO API CALL
    loadRestaurants = () => {
        API.getRestaurants(this.state.lat, this.state.lon)
          .then(res => {this.setState({food: res.data})
              //console.log(this.state.food)
        }).catch(err => console.log(err)) };

     loadEvents = () => {
         API.getEvents()
         .then (res=> {this.setState({events: res.data}) 
                // console.log(this.state.events)
         }).catch(err =>console.log(err))
};

    // ==== GEOLOCATION METHODS ==== //
    
    getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser")
        }
    }

    showPosition = (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        this.setGeoLocation(lat,lon)
    }   

    setGeoLocation = (lat, lon) => {
        this.setState({lat: lat, lon: lon})
        console.log(`Latitude: ${lat}`);
        console.log(`Longitude: ${lon}`);
    }
        

render () {
    return (
        <>
            <Container id="main-container" class="glassy-text" >
            <Card>
                <Card.Header>
                    <h2 className="w-100 text-center mt-2">Search for local food & entertainment</h2>
                </Card.Header>
                <Card.Body>
                <InputGroup id="search" className="mb-3">
                <FormControl className="wrapper"
                placeholder="Tacos"
                />
                <InputGroup.Append>
                <Button 
                    variant="secondary"
                    onClick={this.handleButtonClick}
                ><FaSearchLocation />
                </Button>
                </InputGroup.Append>
                </InputGroup>
                </Card.Body>

            </Card>

            <Card className="mt-2 p-3">
            {this.state.food.length != 0 ? (
                 <SearchResults 
                     results={this.state.food} 
                 /> 
            ) : (
                <div>
                <p>Nothing to see here, try looking for some food!</p>

            </div>
            )}
            {!this.state.lat && !this.state.lon ? (
                <div>
                <p>Hold on, we're looking for your location</p>
                <ProgressBar variant="success" animated now={100} />
                </div>
            ) : (
                <p className="green"><FaCheckSquare/>  Ready to search!</p>
            )}
            {this.state.events.length !=0 ? (
                 <EventsResults 
                     results={this.state.events} 
                 /> 
            ) : (
                <div>
                <p>Nothing to see here, try looking for something to do!</p>

            </div>
            )}
            
            </Card>
            </Container>

        </>
    )
}}

export default Search
