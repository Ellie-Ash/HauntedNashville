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

    constructor(props){
        super(props)
        this.state ={
          button: true,
          disabled: false
        }
        this.handleSave = this.handleSave.bind(this);
      }

    handleSave = event => {
        event.preventDefault();
        this.setState({ loadingStatus: true });
        const saved = {
            userId: parseInt(sessionStorage.getItem("credentials")),
            locationId: parseInt(this.props.locationId),
            title: this.props.title,
            location: this.props.location,
            button:!this.state.button,
            disabled: false

        }
        DataManager.saveLocation(saved)
        .then(this.setState({disabled: true}))
    }

    render() {
        return (
            <React.Fragment>
                <button className={this.state.button ? "button": "falseBtn"} onClick={this.handleSave}> Save </button>
            </React.Fragment>
        )
    }
}

export default SaveLocation