import React, { Component } from 'react'
import { Link } from "react-router-dom";
import DataManager from "../DataManager"

class SavedLocationCard extends Component {
    state = {
        location: {},
    }
  render() {
    return (
        <div className="locationCard">
        <div className="locationCardContent">
            <img src={require('../icons/castle.svg')} alt="Spooky Location" className="spookyLocationIcon"/>
          <h4>{this.props.savedLocation.title}</h4>
          <p>{this.props.savedLocation.location}</p>

          <button onClick={() => 
            DataManager.removeSavedLocation(this.props.savedLocation.id)
            .then(() => {this.props.getSavedLocations()})}> 
            Delete </button>

          <Link to={`/locations/${this.props.savedLocation.locationId}`}><button >Details</button></Link>

        </div>
        <br/>
      </div>
    );
  }
}

export default SavedLocationCard;