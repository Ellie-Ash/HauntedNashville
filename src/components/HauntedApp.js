import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";
import DataManager from './DataManager'
class HauntedApp extends Component {
  state ={
    isTrue : true
}

triggerRender = () => {
  this.setState({
    isTrue : !this.state.isTrue
  })
}
  render() {
    DataManager.getAllLocations()
    return (
      <React.Fragment>
        <NavBar {...this.props} triggerRender={this.triggerRender}/>
        <AppViews triggerRender={this.triggerRender}/>
      </React.Fragment>
    );
  }
}

export default HauntedApp;