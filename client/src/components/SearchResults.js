import React, { Component } from 'react'
import SearchResultsCard from "./SearchResultsCard"

class SearchResults extends Component {

    // important stuff from the
    //r.restaurant.name
    //r.restaurant.cuisines
    // r.restaurant.location.address (gives the street)
    // r.restaurant.location.locality
    // r.restaurant.location.city
    // r.restaurant.menu_url
    // r.restaurant.events_url


    render(){
        console.log(this.props.results.restaurants)
        return (
            this.props.results.restaurants.map((r) => (
                <SearchResultsCard
                    _id={r.restaurant.R.res_id}
                    key={r.restaurant.R.res_id}
                    name={r.restaurant.name}
                    cuisines={r.restaurant.cuisines}
                    address={r.restaurant.location.address}
                    locality={r.restaurant.location.locality}
                    city={r.restaurant.location.city}
                    menu_url={r.restaurant.menu_url}
                    events_url={r.restaurant.events_url}
                    thumb={r.restaurant.thumb}
                    timings={r.restaurant.timings}
                />
            ))
        )
    }

}

export default SearchResults