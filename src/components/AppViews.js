import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import AuthMain from './auth/AuthMain'
import LocationMain from './locations/LocationMain'
import SavedLocationMain from './saved/SavedLocationMain'
import LocationDetail from './locations/LocationDetail'

export default class AppViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  activeUser = () => parseInt(sessionStorage.getItem("credentials"))


  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <AuthMain {...props} />;
          }}
        />

        <Route
          exact path="/home" render={props => {
            if (this.isAuthenticated()) {
              return <LocationMain {...props} />
              
            }
              return <Redirect to="/" />
          }}
        />

        <Route exact path="/locations/:locationId(\d+)" render={props => {
            if (this.isAuthenticated()) {
                return <LocationDetail locationId={parseInt(props.match.params.locationId)}
                {...props}/>
                  
            }
                return <Redirect to="/" />
            }}
        />

        <Route
          exact path="/my-locations"
          render={props => {
            if (this.isAuthenticated()) {
              return <SavedLocationMain {...props} />;
            }
            return <Redirect to="/" />
          }}
        />

      </React.Fragment>
    );
  }
}
