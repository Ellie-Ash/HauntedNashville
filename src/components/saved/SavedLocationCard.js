import React, { Component } from 'react'
import { Link } from "react-router-dom";
import DataManager from "../DataManager"

class SavedLocationCard extends Component {
    state = {
        location: {},
    }
  render() {
    const activeUser = parseInt(sessionStorage.getItem("credentials"))
    const checkUser = this.props.savedLocation.userId === activeUser
    return (
      <>
        {checkUser ? 
        <div className="locationCard">
        <div className="savedLocationCardContent">
        <div className="deleteBtnParent">
        <button className="deleteBtn" onClick={() => 
          DataManager.removeSavedLocation(this.props.savedLocation.id)
          .then(() => {this.props.getSavedLocations()})}> 
          ×</button>
          </div>
            {/* <img src={require('../icons/castle.svg')} alt="Spooky Location" className="spookyLocationIcon"/> */}
          <div className="locationCardText">
          <h4>{this.props.savedLocation.marker_name}</h4>
          <p>{this.props.savedLocation.location}</p>
          </div>
          <div>
          <Link to={`/locations/${this.props.savedLocation.locationId}`}><button className="savedDetailsBtn">Details</button></Link>
          </div>
      </div>
      <br/>
      </div> : <p></p>}
      </>
    );
  }
}

export default SavedLocationCard;