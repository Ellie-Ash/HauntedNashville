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
        console.log(activeUser)
        const checkUser = isNaN(activeUser)
        return (
            <nav className="mainNav">
            <div className="divider"><img src="https://s-media-cache-ak0.pinimg.com/originals/d8/8d/b2/d88db24705469bee3122183d38192a4e.png" alt="..." className="dividerImg"></img> 
            </div>
            <h1 className="mainHeader"> HAUNTED NASHVILLE </h1>
            {checkUser ? null : <ul className="navBar">
                    <li className="navItem">
                        <Link className="navLink" to="/home">Home</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/my-locations">My Locations</Link>
                    </li>
                    <li className="navItem">
                        <Link onClick={this.logout} className="navLink" to="/">Logout</Link>
                    </li>
                </ul> }
                

                    <div className="divider"><img src="https://s-media-cache-ak0.pinimg.com/originals/d8/8d/b2/d88db24705469bee3122183d38192a4e.png" alt="..." className="dividerImg"></img> 
            </div>
            </nav>
        )
    }
}

export default NavBar