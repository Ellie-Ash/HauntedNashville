import React, { Component } from 'react'
import LocationCard from './LocationCard'
import DataManager from '../DataManager'

class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            locations: []
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }

componentDidMount(){
    DataManager.getAllLocations()
    .then((locations) => {
        this.setState({
            locations: locations,
            
        })
    })
}

componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.locations
    });
  }

  handleNameChange(e) {
    let currentList = [];
    let newList = [];
        if (e.target.value !== "") {
        currentList = this.state.locations;
        newList = currentList.filter(location => {
        const lowercase = location.marker_name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lowercase.includes(filter);
    });
    this.setState({
        locations: newList
        });
   
    } else {
        DataManager.getAllLocations()
        .then((locations) => {
        this.setState({
            locations: locations,
        })
    })
    }
}

render(){
    return(
        <>
        <div className="locationCardContainer">
        <input type="text" className="searchInput"                placeholder="Search By Name" onChange={this.handleNameChange}></input>
            {this.state.locations.map((location, i,latitude, longitude) => <LocationCard 
            key={i}
            location={location}
            latitude={latitude}
            longitude={longitude}
            />)}
        </div>
        </>
    )
}
}

export default LocationList