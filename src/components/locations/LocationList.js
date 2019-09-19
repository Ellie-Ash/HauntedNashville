import React, { Component } from 'react'
import LocationCard from './LocationCard'
import DataManager from '../DataManager'

class LocationList extends Component {
    // state = {
    //     locations: [],
    // }

    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            locations: []
        }
        this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    let currentList = [];
    let newList = [];
        if (e.target.value !== "") {
        currentList = this.state.locations;
        console.log("state before filter", this.state.locations)
        newList = currentList.filter(location => {
        const lowercase = location.title.toLowerCase();
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
        <input type="text" className="searchInput"                placeholder="Search" onChange={this.handleChange}></input>
            {this.state.locations.map((location, i) => <LocationCard 
            key={i}
            location={location}
            />)}
        </div>
        </>
    )
}
}

export default LocationList