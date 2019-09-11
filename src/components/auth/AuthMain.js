import React, { Component } from 'react';
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

class AuthMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="welcomeDiv">
                    <p> Psycho slice flames. Haunt sliced at choking cut drool. In willow trees, killer dolls are rotten teeth bite, sheep children virus nibh, in zombies brains unknown ghost creepy. Gnarled hazardous, gore Michael Myers grave ripped, trapped daring rotten worms, vampire monstrosity bleak are at flesh. Falling are graveyard graves est. Blood guns bury scream, stab graveyard crazed dark crying. Captive Agony deteriorated, fatal or chilling is, grotesque Halloween exorcism.</p>
                </div>
                <LoginModal {...this.props}/>
                <RegisterModal {...this.props}/>
            </React.Fragment>
        )
    }
}

export default AuthMain