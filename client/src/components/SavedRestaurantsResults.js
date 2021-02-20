import React, { Component } from 'react'
import SavedCard from "./SavedRestaurantsResultsCard"

class SavedRestaurantResults extends Component {

    render(){
        return(
            this.props.results.map((r) => (
                <SavedCard
                id={r._id}
                key={r.id}
                name={r.name}
                cuisines={r.cuisines}
                address={r.address}
                menu_url={r.menu_url}
                timings={r.timings}
                deleteFood={this.props.deleteFood}
                />
            ))
        )
    }

}

export default SavedRestaurantResults