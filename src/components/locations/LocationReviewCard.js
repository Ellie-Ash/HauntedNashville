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
        
          <div className="makeRow">
          <div className="makeColumn">
          <span style={{ color: 'white' }}><i className="fas fa-skull fa-2x"></i></span>
          <p>{this.props.review.username}</p>
          </div>
          <div className="makeColumn">
          <Rating
            readonly
            name="rating"
            id="rating"
            initialRating={this.props.review.rating}
            emptySymbol={<span style={{ color: 'gray' }}><i className="fas fa-ghost"></i></span>}
            fullSymbol={<span style={{ color: 'black' }}><i className="fas fa-ghost"></i></span>}
            />
          <h4>{this.props.review.ratingTitle}</h4>
          <p>{this.props.review.review}</p>
          </div>
          </div>

    {checkUser ? <div className="reviewBtnContainer">
        <EditReviewModal 
        {...this.props}
        postEditedReview={this.props.postEditedReview}
      />
        <button onClick={() => 
            DataManager.deleteReview(this.props.review.id)
            .then(() => {this.props.getReviews()})}> 
            Delete </button>
        </div> : null
        }
          </div>
          <div className="divider"><img src="https://wiki.ffxiv-roleplayers.com/images/f/fa/Albauntdivide.png" alt="..." className="dividerImg"></img> 
            </div>
        </div>
    )
}
}

export default LocationReviewCard