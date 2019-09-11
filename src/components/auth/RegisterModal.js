import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DataManager from '../DataManager';

class RegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        DataManager.getAllUsers()
            .then(users => {
                this.setState({
                    users: users
                })
            })
    }

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleRegister = event => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords do not match.")
        } else if (this.state.users.find(user => user.username === this.state.username)) {
            alert("Username already taken.")
        }  else if (this.state.users.find(user => user.email === this.state.email)) {
        alert("This email address is already associated with an account.")
        } else if (this.state.password === "" ||this.state.email === "" || this.state.confirmPassword === ""){
        alert("Please fill out all fields")
        }
        else {
        const newUserObject = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        DataManager.postUser(newUserObject)
            .then(newRegisteredUser => sessionStorage.setItem("credentials", newRegisteredUser.id))
            .then(() => this.props.history.push("/home"))
        }
    }


    render() {
        return (
            <div>
                <button className="registerBtn" onClick={this.toggle}>Register</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                    <form>
                        <fieldset>
                            <div className="registerModalForm">
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
                                <input onChange={this.handleFieldChange} type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                        </fieldset>
                    </form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.handleRegister}>Sign up</button>{' '}
                        <button onClick={this.toggle}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default RegisterModal;