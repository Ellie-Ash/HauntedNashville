import React, { Component } from 'react'
import SavedLocationCard from './SavedLocationCard'
import DataManager from '../DataManager'

class SavedLocationList extends Component {
    state = {
        savedLocations: [],
    }

componentDidMount(){
    DataManager.getAllSavedLocations()
    .then((savedLocations) => {
        this.setState({
            savedLocations: savedLocations
        })
        console.log("in CDM", savedLocations)
    })
}

render(){
    console.log(this.state)
    return(
        <div className="locationCardContainer">
            {this.state.savedLocations.map((savedLocation, i) => <SavedLocationCard 
            key={i}
            savedLocation={savedLocation}
            />)}
        </div>
    )
}
}

export default SavedLocationList