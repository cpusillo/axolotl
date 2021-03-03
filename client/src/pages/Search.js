import React, { Component } from 'react'
import { Container, Card, Button, Row, Col, ProgressBar } from 'react-bootstrap'
import { FaCheckSquare } from 'react-icons/fa'
import API from "../utils/API"
import SearchResults from "../components/SearchResults"
import EventsResults from "../components/EventsResults"
import BestResults from "../components/BestResults"
import './search.css';
import firebase from "../firebase"

class Search extends Component {
    state = { 
        food: [],
        events: [],
        results: [],
        query: "",
        lat: "",
        lon: "",
        searchMode: "restaurants", 
        bg1color: "",
        bgcolor: "",
        currentUser: ""
    }

    componentDidMount(){
        this.getLocation();
        this.getCurrentUser();
    }

    getCurrentUser = () => {
        var user = firebase.auth().currentUser.email;
        console.log(user)
        this.setState({currentUser: user})
    }

    

    // ==== Handlers ==== //        

    handleInputChange = event => {
        this.setState({query: event.target.value})
        const { food, events, query, results, searchMode} = this.state;

        if (searchMode === "restaurants") {

            if (query == ""){
                return;
            }
            else {
                const results = food.restaurants.filter(f => 
                    f.restaurant.cuisines.includes(query));
                this.setState({results})
                console.log(results)
            }
        }

        else if (searchMode === "events") {
            return;
        }

    }

    
    handleEventButtonClick = () => {
        this.setState({searchMode: "events"})
        this.setState({bgColor: "darkblue"})
        this.setState({bg1Color: ""})
        this.loadEvents();
        this.setState({food:""})
    }

    handleRestaurantsButtonClick = () => {
        this.setState({searchMode: "restaurants"})
        this.setState({bg1Color: "darkblue"})
        this.setState({bgColor: ""})
        this.loadRestaurants(this.state.latitude, this.state.longitude)
        this.setState({events:""})
    }

    
    // ==== API CALLS ==== //
    
    // ZOMATO API CALL
    loadRestaurants = () => {
        API.getRestaurants(this.state.lat, this.state.lon)
          .then(res => {this.setState({food: res.data})
              //console.log(this.state.food)
        }).catch(err => console.log(err)) };

    // SEATGEEK API CALL
     loadEvents = () => {
         API.getEvents()
         .then (res=> {this.setState({events: res.data}) 
        console.log(this.state.events)
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

        // ==== INTERNAL API METHODS ==== //

        saveFoods = foodData => {
            API.saveFoods({
                id: foodData.id,
                name: foodData.name,
                cuisines: foodData.cuisines,
                address: foodData.address,
                menu_url: foodData.menu_url,
                timings: foodData.timings,
                reservation: "",
                notes: "",
                user: this.state.currentUser
            })
        }

        saveEvents = eventsData => {
            API.saveEvents ({
                id: eventsData.id,
                title: eventsData.title,
                type: eventsData.type,
                venue: eventsData.venue,
                address: eventsData.address,
                extended_address: eventsData.extended_address,
                url: eventsData.url,
                date: eventsData.date,
                notes: ""
            })
        }
    
        

render(){
    // console.log(this.state.searchMode)

    return (
        <>
            <Container className="glassy-text main-container" >
            <Card>
                <Card.Header>
                    <h2 className="w-100 text-center mt-2">Search for local food & entertainment</h2>
                </Card.Header>
                <Card.Body>
                <Container>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                <Button  className="w-100 resEvent" style={{backgroundColor: this.state.bg1Color}}
           onClick={this.handleRestaurantsButtonClick}>
                    Restaurants
                </Button>
                </Col>
                <Col md="auto"></Col>
                <Col xs lg="2">
                <Button className="w-100 resEvent" style={{backgroundColor: this.state.bgColor}}
           onClick={this.handleEventButtonClick}>
                    Events
                </Button>
                </Col>
                </Row>
                </Container>
             </Card.Body>

            </Card>

            <Card className="mt-2 p-3">

            {this.state.results.length !== 0 && this.state.searchMode !== "events" ? (
                 <BestResults 
                     results={this.state.results} 
                     saveFoods={this.saveFoods}
                 /> 
            ) : (
                <div>
                <p></p>

            </div>
            )}
            
            {this.state.food.length !== 0 ? (
                 <SearchResults 
                     results={this.state.food} 
                     saveFoods={this.saveFoods}
                 /> 
            ) : (
                <div>
                <p></p>

            </div>
            )}

{this.state.events.length !== 0 ? (
                 <EventsResults 
                     results={this.state.events} 
                     saveEvents={this.saveEvents}
                 /> 
            ) : (
                <div>
                <p></p>

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
                   

            
            </Card>
            </Container>

        </>
    )
}}

export default Search
