import React, { Component } from 'react';
import DataManager from '../DataManager';
import LocationReviewModal from './LocationReviewModal';
import LocationReviewCard from './LocationReviewCard'
import SaveLocation from '../saved/SaveLocation'

class LocationDetail extends Component {

  state = {
      reviews: [],
      title: "",
      location: "",
      marker_text: "",
      latitude: "",
      longitude: ""
  }

componentDidMount(){
    DataManager.getLocation(this.props.locationId)
    .then((location) => {
      this.setState({
        title: location.title,
        location: location.location,
        marker_text: location.marker_text,
        latitude:  location.latitude,
        longitude: location.longitude
      });
    });
    this.getReviews()
  }

getReviews = () => {
      DataManager.getAllReviews()
        .then((reviews) => {
        const filteredReviews = reviews.filter(review => review.locationId === this.props.locationId)
        this.setState({
          reviews: filteredReviews
      })
  })
}


  render() {
    return (
      <div className="locationDetailContainer">
        <div className="locationDetailContent">
            <h4>{this.state.title}</h4>
            <p>❖ {this.state.location}</p>
            <br/>
            <p>{this.state.marker_text}</p>
            <br />

            <div className="saveAndReviewBtns">
            <LocationReviewModal  
            locationId={this.props.locationId}
            getReviews={this.getReviews}
            />

            <SaveLocation
            locationId={this.props.locationId}
            title={this.state.title}
            location={this.state.location}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            />

            </div>
            
            <div className="divider"><img src="https://wiki.ffxiv-roleplayers.com/images/f/fa/Albauntdivide.png" alt="..." className="dividerImg"></img> 
            </div>

            <div className="reviewCardContainer">
            {this.state.reviews.map((review, i) => 
            <LocationReviewCard 
            key={i}
            locationId={this.props.locationId}
            review={review}
            getReviews={this.getReviews}
            {...this.props}
            />)}
        </div>
        </div>
      </div>
    );
  }
}

export default LocationDetail;
