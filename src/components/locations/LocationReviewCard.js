import React, { Component } from 'react'
import Rating from 'react-rating'

class LocationReviewCard extends Component {
render(){
    return(
        <div className="reviewCard">
        <div className="locationReviewCardContent">
        {/* <span style={{ color: 'gray' }}><i className="fas fa-skull fa-2x"></i></span>
        <br /> */}
        <Rating
            readonly
            name="rating"
            id="rating"
            initialRating={this.props.review.rating}
            emptySymbol={<span style={{ color: 'gray' }}><i className="fas fa-ghost"></i></span>}
            fullSymbol={<span style={{ color: 'black' }}><i className="fas fa-ghost"></i></span>}
            />
            <p>username</p>
          <h4>{this.props.review.ratingTitle}</h4>
          <p>{this.props.review.review}</p>
          <button> Delete </button>
          <button> Edit </button>
        </div>
        <br/>
        </div>
    )
}
}

export default LocationReviewCard