import React, { Component } from 'react'
import { Link } from "react-router-dom";

class SavedLocationCard extends Component {
  render() {
    return (
        <div className="locationCard">
        <div className="locationCardContent">
            <img src={require('../icons/castle.svg')} alt="Spooky Location" className="spookyLocationIcon"/>
          <h4>{this.props.savedLocation.id}</h4>
          <p>{this.props.savedLocation.locationId}</p>
          <Link to={`/locations/${this.props.savedLocation.locationId}`}><button>Details</button></Link>
        </div>
        <br/>
      </div>
    );
  }
}

export default SavedLocationCard;