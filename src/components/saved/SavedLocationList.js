import React, { Component } from 'react'
import SavedLocationCard from './SavedLocationCard'
import DataManager from '../DataManager'

class SavedLocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedLocations: [],
        };
        this.getSavedLocations = this.getSavedLocations.bind(this);
    }

componentDidMount(){
    DataManager.getAllSavedLocations()
    .then((savedLocations) => {
        this.setState({
            savedLocations: savedLocations
        })
        console.log("saved", savedLocations)
    })
}

getSavedLocations(){
    DataManager.getAllSavedLocations()
    .then((savedLocations) => {
        this.setState({
            savedLocations: savedLocations
        })
    })
}


render(){
    return(
        <div className="locationCardContainer">
            {this.state.savedLocations.map((savedLocation, i) => <SavedLocationCard 
            key={i}
            savedLocation={savedLocation}
            getSavedLocations={this.getSavedLocations}
            {...this.props}
            />)}
        </div>
    )
}
}

export default SavedLocationList