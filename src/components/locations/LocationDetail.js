import React, { Component } from 'react';
import DataManager from '../DataManager';
import LocationReviewModal from './LocationReviewModal';
import LocationReviewCard from './LocationReviewCard'

class LocationDetail extends Component {

  state = {
      reviews: [],
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
      console.log(this.props.locationId)
    return (
      <div className="locationDetailContainer">
        <div className="locationDetailContent">
            <h4>{this.state.title}</h4>
            <p>❖ {this.state.location}</p>
            <br />
            <p>{this.state.marker_text}</p>
            <br/>
            <button> Save </button>
            <br/>
            <LocationReviewModal  
            locationId={this.props.locationId}
            getReviews={this.getReviews}
            />
            <div className="reviewCardContainer">
            {this.state.reviews.map(review => 
            <LocationReviewCard 
            review={review}
            />)}
        </div>
        </div>
      </div>
    );
  }
}

export default LocationDetail;
