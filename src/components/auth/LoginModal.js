import React, { Component } from 'react';
import DataManager from '../DataManager';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginModal extends Component {
    state = {
        email: "",
        password: "",
        users: []
    }

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: "",
            username: "",
            password: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    handleLogin = event => {
        event.preventDefault()
        DataManager.checkUsers(this.state.email, this.state.password)
            .then(checkedUsers => {
                if (checkedUsers.length > 0) {
                    sessionStorage.setItem("credentials", checkedUsers[0].id)
                    this.props.history.push("/home");
                } else {
                    alert("Invalid username or password.")
                }
            })
        }


    componentDidMount() {
        DataManager.getAllUsers()
            .then(users => {
                this.setState({
                    users: users
                })
            })
    }

    render() {
        return (
            <div>
                <button className="loginBtn" onClick={this.toggle}>Login</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                    <form>
                        <fieldset>
                            <div className="loginModalForm">
                            <input onChange={this.handleFieldChange} type="email"
                                    id="email"
                                    placeholder="Email address"
                                    required
                                    autoFocus=""
                                /><br/>
                                <input onChange={this.handleFieldChange} type="text"
                                    id="username"
                                    placeholder="Username"
                                    required
                                /><br/>
                                <input onChange={this.handleFieldChange} type="password"
                                    id="password"
                                    placeholder="Password"
                                    required
                                /><br/>
                            </div>
                        </fieldset>
                    </form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.handleLogin}>Login</button>{' '}
                        <button onClick={this.toggle}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default LoginModal;