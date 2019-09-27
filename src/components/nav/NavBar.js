import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class NavBar extends Component {

    logout = () => {
        sessionStorage.clear()
        this.props.triggerRender()
    }
   
    render() {
        const activeUser = parseInt(sessionStorage.getItem("credentials"))
        const checkUser = isNaN(activeUser)
        return (
            <nav className="mainNav">
            {checkUser ? null : <ul className="navBar">
                    <li className="navItem">
                        <Link className="navLink" to="/home"><span
                        style={{ color: 'whitesmoke' }}><i className="fas fa-bars"></i></span></Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/my-locations"><span style={{ color: 'whitesmoke' }}><i className="fas fa-skull fa-1x"></i></span></Link>
                    </li>
                    <li className="navItem">
                        <Link onClick={this.logout} className="navLink" to="/"><span style={{ color: 'whitesmoke' }}><i className="fas fa-sign-out-alt"></i></span></Link>
                    </li>
                </ul> }
            <h1 className="mainHeader"> Haunted Nashville </h1>
            {/* <div className="divider"><img src="https://s-media-cache-ak0.pinimg.com/originals/d8/8d/b2/d88db24705469bee3122183d38192a4e.png" alt="..." className="dividerImg"></img> 
            </div> */}
            
                    {/* <div className="divider"><img src="https://s-media-cache-ak0.pinimg.com/originals/d8/8d/b2/d88db24705469bee3122183d38192a4e.png" alt="..." className="dividerImg"></img> 
            </div> */}
            </nav>
        )
    }
}

export default NavBar