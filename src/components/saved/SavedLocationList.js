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
    })
}

getSavedLocations(){
    DataManager.getAllSavedLocations()
}


render(){
    return(
        <div className="locationCardContainer">
            {this.state.savedLocations.map((savedLocation, i) => <SavedLocationCard 
            key={i}
            savedLocation={savedLocation}
            getAllSavedLocations={this.getAllSavedLocations}
            {...this.props}
            />)}
        </div>
    )
}
}

export default SavedLocationList