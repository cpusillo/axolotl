import React, { Component } from 'react'
import { Container, Card, Button, InputGroup, FormControl, ProgressBar } from 'react-bootstrap'
import { FaSearchLocation, FaCheckSquare } from 'react-icons/fa'
import API from "../utils/API"
import SearchResults from "../components/SearchResults"
import EventsResults from "../components/EventsResults"
import BestResults from "../components/BestResults"
import './search.css';

class Search extends Component {
    state = { 
        food: [],
        events: [],
        results: [],
        query: "",
        lat: "",
        lon: "",
        searchMode: "restaurants", 
    }

    componentDidMount(){
        this.getLocation();
    }

    // ==== Handlers ==== //

    handleButtonClick = () => {
    //   
    }

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
                //console.log(results)
            }
        }

        else if (searchMode === "events") {
            return;
        }

    }
    
    handleEventButtonClick = () => {
        this.setState({searchMode: "events"})
        this.loadEvents()
    }

    handleRestaurantsButtonClick = () => {
        this.setState({searchMode: "restaurants"})
        this.loadRestaurants(this.state.latitude, this.state.longitude)
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

        // ==== INTERNAL API METHODS ==== //

        saveFoods = foodData => {
            API.saveFoods({
                id: foodData.id,
                name: foodData.name,
                cuisines: foodData.cuisines,
                address: foodData.address,
                menu_url: foodData.menu_url,
                timings: foodData.timings
            })
        }
    
        

render(){
    // console.log(this.state.searchMode)

    return (
        <>
            <Container id="main-container" className="glassy-text" >
            <Card>
                <Card.Header>
                    <h2 className="w-100 text-center mt-2">Search for local food & entertainment</h2>
                </Card.Header>
                <Card.Body>
                <Button onClick={this.handleRestaurantsButtonClick}>
                    Restaurants
                </Button>
                <Button onClick={this.handleEventButtonClick}>
                    Events
                </Button>
                <InputGroup className="mb-3" onChange={this.handleInputChange}>
                <FormControl className="wrapper"
                placeholder="Tacos"
                />
                <InputGroup.Append>
                <Button 
                    variant="secondary"
                    //onClick={this.handleButtonClick}
                ><FaSearchLocation />
                </Button>
                </InputGroup.Append>
                </InputGroup>
                </Card.Body>

            </Card>

            <Card className="mt-2 p-3">
            {this.state.results.length !== 0 ? (
                <BestResults
                    results={this.state.results}
                    saveFoods={this.saveFoods} />
            ) : (
                <p></p>
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



            {!this.state.lat && !this.state.lon ? (
                <div>
                <p>Hold on, we're looking for your location</p>
                <ProgressBar variant="success" animated now={100} />
                </div>
            ) : (
                <p className="green"><FaCheckSquare/>  Ready to search!</p>
            )}
            {this.state.events.length !== 0 ? (
                 <EventsResults 
                     results={this.state.events} 
                 /> 
            ) : (
                <div>
                <p></p>

            </div>
            )}


            
            </Card>
            </Container>

        </>
    )
}}

export default Search
