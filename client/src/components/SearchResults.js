import React, { Component } from 'react'
import SearchResultsCard from "./SearchResultsCard"
import SearchBar from "./SearchBar"

class SearchResults extends Component {

    render(){
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
                    timings={r.restaurant.timings}
                    rating={r.restaurant.user_rating.aggregate_rating}
                    saveFoods={this.props.saveFoods}
                />
            )
            )
        )
    }

}

export default SearchResults