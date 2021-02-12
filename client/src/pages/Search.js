import React, { Component } from 'react'
import { Container, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaSearchLocation } from 'react-icons/fa'
import API from "../utils/API"
import SearchResults from "../components/SearchResults"
import EventsResults from "../components/EventsResults"

class Search extends Component {
    state={
        food: [],
        events: []        
    }
    componentDidMount() {
        // this.loadRestaurants();
        this.loadEvents()
    };
    
    ZOMATO API CALL
    loadRestaurants = () => {
        API.getRestaurants()
          .then(res => {
              this.setState({
                  food: res.data
              })
              console.log(this.state.food);
          }
            setFood(res.data)
          )};
      loadRestaurants();
        

     loadEvents = () => {
         API.getEvents()
         .then (res=> {
             this.setState({
                 events: res.data
             }) 
            //  console.log(this.state.events)
         }
            // setEvents(res.event)
        )}   
        // loadEvents();
        
        
render () {
    return (
        <>
            <Container>
            <Card>
                <Card.Header>
                    <h2 className="w-100 text-center mt-2">Search for local food & entertainment</h2>
                </Card.Header>
                <Card.Body>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Tacos"
                />
                <InputGroup.Append>
                <Button variant="secondary"><FaSearchLocation /></Button>
                </InputGroup.Append>
                </InputGroup>
                </Card.Body>


            </Card>

            <Card className="mt-2 p-3">
                {/* <SearchResults 
                results={this.state.food} 
                /> */}
                <EventsResults results = {this.state.events} />
                
            </Card>
            </Container>

        </>
    )
}}

export default Search
