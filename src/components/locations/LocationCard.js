import React, { Component } from 'react'
import { Link } from "react-router-dom";

class LocationCard extends Component {

  render() {
      console.log(this.props.location, "test")
    return (
      <div className="locationCard">
        <div className="locationCardContent">
        
            <img src={require('../icons/castle.svg')} alt="Spooky Location" className="spookyLocationIcon"/>
          
          <h4>{this.props.location.title}</h4>
          <p>{this.props.location.location}</p>
          <Link to={`/locations/${this.props.location.number}`}><button>Details</button></Link>
        </div>
        <br/>
      </div>
    );
  }
}

export default LocationCard;