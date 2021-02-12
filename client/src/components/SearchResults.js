import React, { Component } from 'react'
import SearchResultsCard from "./SearchResultsCard"

class SearchResults extends Component {

    render(){
        //console.log(this.props.results.restaurants)
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
                    thumb={r.restaurant.thumb ? r.restaurant.thum : "https://lh3.googleusercontent.com/proxy/xROwqj4aX26Ya2WsjvQm6ZeG4dIOUvm1stlzQAu9l5Op4YSYWnnM1Hl4gxgKe-oxRBBB0y6oNiECD1lrszVRS1Nf1lBOHOxUhAE1jcD3WJrTe4JFJ0k7F-mS2Qywe_TQ4A"}
                    timings={r.restaurant.timings}
                />
            ))
        )
    }

}

export default SearchResults