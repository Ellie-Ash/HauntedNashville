import React, { Component } from 'react';
import DataManager from '../DataManager';
import LocationReviewModal from './LocationReviewModal';

class LocationDetail extends Component {

  state = {
      title: "",
      location: "",
      marker_text: ""
  }

  componentDidMount(){
    DataManager.getLocation(this.props.locationId)
    .then((location) => {
      this.setState({
        title: location.title,
        location: location.location,
        marker_text: location.marker_text,
      });
    });
  }

  render() {
    return (
      <div className="locationDetailContainer">
        <div className="locationDetailContent">
            <h3>{this.state.title}</h3>
            <p>{this.state.location}</p>
            <p>{this.state.marker_text}</p>
            <br/>
            <LocationReviewModal  />
        </div>
      </div>
    );
  }
}

export default LocationDetail;
