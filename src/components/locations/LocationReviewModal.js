import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DataManager from '../DataManager';
import Rating from 'react-rating'

class LocationReviewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            users: [],
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
        this.handleRatingChange = this.handleRatingChange.bind(this)
    }

    componentDidMount() {
        DataManager.getAllReviews()
            .then(reviews => {
                this.setState({
                    reviews: reviews
                })
            })
            DataManager.getAllUsers()
            .then(users => {
                this.setState({
                    users: users
                })
            })
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    handleRatingChange = event => {
        const stateToChange = {};
        stateToChange["rating"] = event;
        this.setState(stateToChange);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleReview = event => {
        event.preventDefault();
        if (this.state.review === "") {
            alert("Please fill out all fields.")
        }
        else {
        this.setState({ loadingStatus: true });
        const newReview = {
            userId: parseInt(sessionStorage.getItem("credentials")),
            locationId: parseInt(this.props.locationId),
            username: sessionStorage.getItem("username"),
            ratingTitle: this.state.ratingTitle,
            review: this.state.review,
            rating: parseInt(this.state.rating),
        }
        DataManager.postReview(newReview)
            .then(() => {this.props.getReviews()})
            .then(this.toggle)
        }
    }
    
    render() {
        
        return (
            <div>
                <button className="reviewBtn" onClick={this.toggle}>Review</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Review</ModalHeader>
                    <ModalBody>
                    <form>
                        <fieldset>
                        <Rating
                                name="rating"
                                id="rating"
                                initialRating={this.state.rating}
                                emptySymbol={<span style={{ color: 'gray' }}><i className="fas fa-ghost fa-2x"></i></span>}
                                fullSymbol={<span style={{ color: 'black' }}><i className="fas fa-ghost fa-2x"></i></span>}
                                onClick={this.handleRatingChange} 
                                />
                                <br/>
                            <div className="reviewModalForm">
                                <input onChange={this.handleFieldChange} type="text" id="ratingTitle" placeholder="Title" required></input>
                                <textarea onChange={this.handleFieldChange}
                                    id="review"
                                    placeholder="Review"
                                    required
                                /><br/>  
                            </div>
                        </fieldset>
                    </form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.handleReview}>Save</button>{' '}
                        <button onClick={this.toggle}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default LocationReviewModal;