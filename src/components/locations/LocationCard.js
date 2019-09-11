import React, { Component } from 'react'
//import { Link } from "react-router-dom";

class LocationCard extends Component {

  render() {
    return (
      <div className="locationCard">
        <div className="locationCardContent">
          <h4>{this.props.location.title}</h4>
          <p>{this.props.location.location}</p>
          <button> Button </button>
        </div>
        <br/>
      </div>
    );
  }
}

export default LocationCard;