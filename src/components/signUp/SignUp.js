import React, {Component} from "react";
import "./SignUp.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import Modal from "react-bootstrap/Modal";
import map from "../images/googlemap.png";
import Button from "react-bootstrap/Button";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

    _showTable = (bool) => {
        this.setState({
                          showMessage: bool
                      });
    };
    render() {
        return (
            <div className="main-container" id="home">
                <div className="container" id="mainMenuBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="sign-in-container container">
                            <form>
                                <h3>Sign Up</h3>
                                <div className="form-group">
                                    <label className="label-text">First name</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter First name"/>
                                </div>

                                <div className="form-group">
                                    <label className="label-text">Last name</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter Last name"/>
                                </div>
                                <div className="form-group">
                                    <label className="label-text">Pantry Name</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter pantry name"/>
                                </div>
                                <div className="form-group">
                                    <label className="label-text">Email address</label>
                                    <input type="email" className="form-control"
                                           placeholder="Enter email"/>
                                </div>

                                <div className="form-group">
                                    <label className="label-text">Password</label>
                                    <input type="password" className="form-control"
                                           placeholder="Enter password"/>
                                </div>
                                <button type="button" className="btn btn-success btn-lg"
                                        onClick={this.open}>
                                    Sign up
                                </button>

                                {/*{this.state.showModal && (*/}
                                <Modal className="modal-container"
                                       show={this.state.showModal}
                                       onHide={this.close}
                                       animation={true}
                                       bsSize="large">
                                    <Modal.Header>
                                        <Modal.Title>Profile Added!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Link className="btn btn-success btn-block"
                                              onClick={this.open}
                                              to="/foodPantryPortal" >
                                            Go to dashboard
                                        </Link>
                                    </Modal.Footer>
                                </Modal>
                                {/*)}*/}
                                <br/><br/><br/>
                                {/*<div className="sign-up-text text-right">Don't have an account? Sign up here:</div>*/}
                                <div className="sign-up-text text-center">
                                    Already have an account? <Link className="btn btn-primary sign-up-btn"
                                                                 type="button"
                                                                 to="/signIn">Click here to Sign in</Link>
                                </div>
                                <br/><br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
