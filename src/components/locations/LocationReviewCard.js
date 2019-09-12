import React, { Component } from 'react'
class LocationReviewCard extends Component {

render(){
    return(
        <div className="reviewCard">
        <div className="locationReviewCardContent">
        {/* <span style={{ color: 'gray' }}><i className="fas fa-skull fa-2x"></i></span>
        <br /> */}
        <br/>
          <h4>{this.props.review.ratingTitle}</h4>
          <p>{this.props.review.review}</p>
        </div>
        <br/>
        </div>
    )
}
}

export default LocationReviewCard