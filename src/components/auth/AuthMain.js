import React, { Component } from 'react';
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

class AuthMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="welcomeDiv">
                    <h4> Welcome </h4>
                    <p> Psycho slice flames. Haunt sliced at choking cut drool. In willow trees, killer dolls are rotten teeth bite, sheep children virus nibh, in zombies brains unknown ghost creepy. Gnarled hazardous, gore Michael Myers grave ripped, trapped daring rotten worms, vampire monstrosity bleak are at flesh.</p>
            <br/>
                <div className="loginRegisterBtnContainer">
                <LoginModal {...this.props} />
                <RegisterModal {...this.props}/>
                </div>
                    <div className="divider"><img src="https://wiki.ffxiv-roleplayers.com/images/f/fa/Albauntdivide.png" alt="..." className="dividerImg"></img> 
            </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthMain