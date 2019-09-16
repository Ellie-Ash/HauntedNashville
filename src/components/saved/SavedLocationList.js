import React, { Component } from 'react'
import SavedLocationCard from './LocationCard'
import DataManager from '../DataManager'

class SavedLocationList extends Component {
    state = {
        savedLocations: [],
    }

componentDidMount(){
    DataManager.getAllSavedLocations()
    .then((saved) => {
        this.setState({
            saved: saved
        })
    })
}

render(){
    return(
        <div className="locationCardContainer">
            {this.state.savedLocations.map((location, i) => <SavedLocationCard 
            key={i}
            location={location}
            />)}
        </div>
    )
}
}

export default SavedLocationList