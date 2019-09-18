import React, { Component } from 'react'
import { Link } from "react-router-dom";

class LocationCard extends Component {

  render() {
    return (
      <div className="locationCard">
        <div className="locationCardContent">
            {/* <img src={require('../icons/castle.svg')} alt="Spooky Location" className="spookyLocationIcon"/> */}
        <div  className="locationCardText">
          <h4>{this.props.location.title}</h4>
          <p>{this.props.location.location}</p>
          </div>
          <Link to={`/locations/${this.props.location.number}`}><button>Details</button></Link>
        </div>
        <br/>
      </div>
    );
  }
}

export default LocationCard;