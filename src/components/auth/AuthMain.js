import React, { Component } from 'react';
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

class AuthMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="welcomeDiv">
                    <div className="welcomeContent">
                    <h4> Welcome </h4>
                    <p className="indent"> Boo werewolf cauldron haunted cauldron witch vampire. Witch monster drive-in chainsaw monster skeleton cauldron.</p>
                    </div>
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