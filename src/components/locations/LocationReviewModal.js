import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DataManager from '../DataManager';


class LocationReviewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            locationId: "",
            userId: "",
            rating: "",
            review: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        DataManager.getAllReviews()
            .then(reviews => {
                this.setState({
                    reviews: reviews
                })
            })
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleReview = event => {
        event.preventDefault();
        if (this.state.review === "" || this.state.rating  === "") {
            alert("Please fill out all fields.")
        }
        else {
        const newReview = {
            userId: this.state.userId,
            locationId: this.state.locationId,
            rating: this.state.rating,
            review: this.state.review
        }
        DataManager.postReview(newReview)
            // .then(() => this.props.history.push(`/home`))
            console.log("what")
        }
    }


    render() {
        return (
            <div>
                <button className="reviewBtn" onClick={this.toggle}>Add Review</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Review</ModalHeader>
                    <ModalBody>
                    <form>
                        <fieldset>
                            <div className="reviewModalForm">
                            <input onChange={this.handleFieldChange} type="text"
                                    id="rating"
                                    placeholder=""
                                    required
                                    autoFocus=""
                                /><br/>
                                <input onChange={this.handleFieldChange} type="text"
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