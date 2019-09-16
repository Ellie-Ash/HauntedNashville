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
        }
        DataManager.saveLocation(saved)
        .then(alert("Saved!"))
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleSave}> Save </button>
            </React.Fragment>
        )
    }
}

export default SaveLocation