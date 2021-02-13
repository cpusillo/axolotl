import React, { Component } from 'react'
import EventsResultsCard from "./EventsResultsCard"


//eslint-disable-next-line
class EventsResults extends Component{
    //eslint-disable-next-line

        // e.results.events
        // e.results.events.id
            // id & key
        // e.results.events.title
            // name of performer/event
        // e.results.events.performers.image
            // picture
        // e.results.events.performers.type
            // category of event
        // e.results.events.datetime_local
            // date         
        // e.results.events.url
            // tickets/sales
        // e.results.events.venue.name
        // e.results.events.venue.address
        // e.results.events.venue.extended_address  
        
        render(){
                console.log(this.props.results.events)
        return(
            this.props.results.events.map((e) => (
                <EventsResultsCard
                _id={e.id}
                key={e.id}
                title={e.title}
                type={e.type}
                venue={e.venue.name}
                address={e.venue.address}
                extended_address={e.venue.extended_address}
                date={e.datetime_local}
                image={e.performers[0].image}
                url={e.url}
                
                >Hello</EventsResultsCard>     
            ))
      
        )
    }
}


export default EventsResults