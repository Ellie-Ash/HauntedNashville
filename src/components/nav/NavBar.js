import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class NavBar extends Component {

    logout = () => {
        sessionStorage.clear()
    }

    render() {
        return (
            <nav className="mainNav">
            <h1 className="mainHeader"> Haunted Nashville </h1>
                <ul className="navBar">
                    <li className="navItem">
                        <Link className="navLink" to="/home">Home</Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink" to="/my-locations">My Locations</Link>
                    </li>
                    <li className="navItem">
                        <Link onClick={this.logout} className="navLink" to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar