import React, { Component } from 'react'
import { Link } from "react-router-dom";

class LocationCard extends Component {

  render() {
    const lat = this.props.location.latitude
    const long = this.props.location.longitude
    const emptyCoordinates = lat === undefined || long === undefined
    return (
      <div className="locationCard">
        <div className="locationCardContent">
            {/* <img src={require('../icons/castle.svg')} alt="Spooky Location" className="spookyLocationIcon"/> */}
        <div  className="locationCardText">
          <h4>{this.props.location.title}</h4>
          <p>{this.props.location.location}</p>
          </div>

          <div>
          <Link to={`/locations/${this.props.location.number}`}><button className="detailsBtn">Details</button></Link>

          {emptyCoordinates ? null : <a href={`https://www.google.com/maps/search/?api=1&query=${this.props.location.latitude},${this.props.location.longitude}`}
          ><button>Map</button></a>}
          
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

export default LocationCard;