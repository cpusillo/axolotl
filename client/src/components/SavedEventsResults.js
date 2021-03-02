import React, { Component } from 'react'
import SavedEventsCard from "./SavedEventsResultsCard"

class SavedEventsResults extends Component {

    render(){
        return(
            this.props.results.map((e) => (
                <SavedEventsCard
                id={e._id}
                key={e.id}
                title={e.title}
                image={e.image}
                venue={e.venue}
                type={e.type}
                address={e.address}
                extended_address={e.extended_address}
                date={e.date}
                url={e.url}
                deleteEvents={this.props.deleteEvents}
                notes={e.notes}
                ></SavedEventsCard>
            ))
        )
    }

}

export default SavedEventsResults