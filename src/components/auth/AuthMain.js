import React, { Component } from 'react';
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

class AuthMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="welcomeDiv">
                    <h4> Welcome </h4>
                    <p> Boo werewolf cauldron haunted cauldron witch vampire. Witch monster drive-in chainsaw monster skeleton cauldron. Cauldron trick-or-treat nightmare jack-o-lantern witch jack-o-lantern abomination. Candy werewolf pumpkin boo scare mummy abomination. Spooky werewolf cauldron pumpkin werewolf drive-in afraid.</p>
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