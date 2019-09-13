import React, { Component } from 'react'
import LocationCard from './LocationCard'
import DataManager from '../DataManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

componentDidMount(){
    DataManager.getAllLocations()
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
    return(
        <div className="locationCardContainer">
            {this.state.locations.map((location, i) => <LocationCard 
            key={i}
            location={location}
            />)}
        </div>
    )
}
}

export default LocationList