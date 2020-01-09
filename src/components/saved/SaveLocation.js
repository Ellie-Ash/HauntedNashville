import React, { Component } from 'react';
import DataManager from '../DataManager'

class SaveLocation extends Component {
    componentDidMount() {
        DataManager.getAllSavedLocations()
            .then(saved => {
                this.setState({
                    saved: saved
                })
            })
    }

    handleSave = event => {
        event.preventDefault();
        this.setState({ loadingStatus: true });
        const saved = {
            userId: parseInt(sessionStorage.getItem("credentials")),
            locationId: parseInt(this.props.locationId),
            marker_name: this.props.marker_name,
            location: this.props.location,
            latitude: this.props.latitude,
            longitude: this.props.longitude
        }
        DataManager.saveLocation(saved)
    }

    render() {
        return (
            <React.Fragment>
                <button className="" onClick={this.handleSave}> Save </button>
            </React.Fragment>
        )
    }
}

export default SaveLocation