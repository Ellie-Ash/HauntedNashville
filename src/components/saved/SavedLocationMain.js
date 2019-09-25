import React, { Component } from 'react';
import SavedLocationList from './SavedLocationList'

class SavedLocationMain extends Component {
    render() {
        return (
            <React.Fragment>
                <h4 className="savedLocationHeader">Saved Locations</h4>
                <SavedLocationList />
            </React.Fragment>
        )
    }
}

export default SavedLocationMain