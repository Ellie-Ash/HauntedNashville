import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";
import DataManager from './DataManager'
class HauntedApp extends Component {
  render() {
    DataManager.getAllLocations()
    return (
      <React.Fragment>
        <NavBar {...this.props}/>
        <AppViews />
      </React.Fragment>
    );
  }
}

export default HauntedApp;