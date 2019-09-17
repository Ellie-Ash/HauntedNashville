import React, { Component } from 'react'
import Rating from 'react-rating'
import DataManager from '../DataManager'
import EditReviewModal from './EditReviewModal'
class LocationReviewCard extends Component {
render(){
    const activeUser = parseInt(sessionStorage.getItem("credentials"))
    const checkUser = this.props.review.userId === activeUser
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
        <p></p>
          <p>{this.props.review.ratingTitle}</p>
          <p>{this.props.review.review}</p>

    {checkUser ? <div className="reviewBtnContainer">
        <button onClick={() => 
            DataManager.deleteReview(this.props.review.id)
            .then(() => {this.props.getReviews()})}> 
            Delete </button>
            <EditReviewModal 
            {...this.props}
            postEditedReview={this.props.postEditedReview}
          />
        </div> : null
        }

          

          </div>
        </div>
    )
}
}

export default LocationReviewCard