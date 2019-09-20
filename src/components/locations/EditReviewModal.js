import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DataManager from '../DataManager'
import Rating from 'react-rating'

class EditReviewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            locationId: "",
            userId: "",
            username: "",
            ratingTitle: "",
            review: "",
            rating: 0,
            loadingStatus: false,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    activeUser = sessionStorage.getItem("credentials")

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleRatingChange = event => {
        const stateToChange = {};
        stateToChange["rating"] = event;
        this.setState(stateToChange);
    }

    editExistingReview = event => {
        event.preventDefault();
            this.setState({ loadingStatus: true });
            const editedReview = {
                id: this.props.review.id,
                userId: parseInt(sessionStorage.getItem("credentials")),
                username: sessionStorage.getItem("username"),
                locationId: parseInt(this.props.locationId),
                ratingTitle: this.state.ratingTitle,
                review: this.state.review,
                rating: parseInt(this.state.rating)
            };
            DataManager.editReview(editedReview)
            .then(() => {this.props.getReviews()})
            .then(this.toggle)
    };

    componentDidMount() {
        DataManager.getReview(this.props.review.id)
        .then(review => {
            this.setState({
                userId: review.userId,
                username: review.username,
                locationId: review.locationId,
                ratingTitle: review.ratingTitle,
                review: review.review,
                rating: review.rating,
                loadingStatus: false,
            });
        });
    }

    render(){
        return(
            <>
            <div>
            <button
            className="editBtn"
            onClick={this.toggle}>
            Edit
            </button>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Review</ModalHeader>
                    <ModalBody>
                    <form>
                        <fieldset>
                            <div className="editReviewModal">
                            <Rating
                                name="rating"
                                id="rating"
                                initialRating={this.state.rating}
                                emptySymbol={<span style={{ color: 'gray' }}><i className="fas fa-ghost fa-2x"></i></span>}
                                fullSymbol={<span style={{ color: 'black' }}><i className="fas fa-ghost fa-2x"></i></span>}
                                onClick={this.handleRatingChange} 
                                />
                                <input onChange={this.handleFieldChange} type="text" id="ratingTitle" placeholder="Title" required
                                value={this.state.ratingTitle}></input>
                                <textarea onChange={this.handleFieldChange}
                                value={this.state.review}
                                id="review"
                                placeholder="Review"
                                required
                                /><br/>
                                
                            </div>
                        </fieldset>
                    </form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.editExistingReview}> Save </button>
                        <button onClick={this.toggle}>Cancel</button>
                    </ModalFooter>
                </Modal>
        </div>
        </div>
        </>
        )
    }
}

export default EditReviewModal