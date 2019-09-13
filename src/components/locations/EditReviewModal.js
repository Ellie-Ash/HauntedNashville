import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DataManager from '../DataManager'
import Rating from 'react-rating'

class EditReviewModal extends Component {
    state = {
        reviews: [],
        locationId: "",
        userId: "",
        ratingTitle: "",
        review: "",
        rating: 0,
        loadingStatus: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            locationId: "",
            userId: "",
            ratingTitle: "",
            review: "",
            rating: 0,
            loadingStatus: false,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

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
        if (this.state.ratingTitle === ""||
        this.state.review === "") {
            alert("Please fill out all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const editedReview = {
                userId: parseInt(sessionStorage.getItem("credentials")),
                locationId: parseInt(this.props.locationId),
                ratingTitle: this.state.ratingTitle,
                review: this.state.review,
                rating: parseInt(this.state.rating),
            };
            this.props.postEditedReview(editedReview)
            .then(this.toggle)
    }
};

    componentDidMount() {
        DataManager.getReview(this.props.review.id)
        .then(review => {
            this.setState({
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
            <section className="eventSectionContent">
            <button
            onClick={this.toggle}>
            Edit
            </button>
            </section>
            <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Review</ModalHeader>
                    <ModalBody>
                    <form>
                        <fieldset>
                            <div className="editReviewModal">
                                <input onChange={this.handleFieldChange} type="text" id="ratingTitle" placeholder="Title" required></input>
                                <textarea onChange={this.handleFieldChange}
                                    id="review"
                                    placeholder="Review"
                                    required
                                /><br/>
                                <Rating
                                name="rating"
                                id="rating"
                                initialRating={this.state.rating}
                                emptySymbol={<span style={{ color: 'gray' }}><i className="fas fa-ghost fa-2x"></i></span>}
                                fullSymbol={<span style={{ color: 'black' }}><i className="fas fa-ghost fa-2x"></i></span>}
                                onClick={this.handleRatingChange} 
                                />
                            </div>
                        </fieldset>
                    </form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.editExistingReview}>Save</button>{' '}
                        <button onClick={this.toggle}>Cancel</button>
                    </ModalFooter>
                </Modal>
        </div>
        </>
        )
    }
}

export default EditReviewModal