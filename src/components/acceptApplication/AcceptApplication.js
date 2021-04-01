import React, {Component} from "react";
import logo from "../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import "./AcceptApplication.css"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class BuyGroceryOnline extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showEditConfirmation: false,
            showDeleteConfirmation: false
        };

        this.openEditConfirmation = this.openEditConfirmation.bind(this);
        this.closeEditConfirmation = this.closeEditConfirmation.bind(this);

        this.openDeleteConfirmation = this.openDeleteConfirmation.bind(this);
        this.closeDeleteConfirmation = this.closeDeleteConfirmation.bind(this);
    }

    openEditConfirmation() {
        this.setState({showEditConfirmation: true});
    }

    closeEditConfirmation() {
        this.setState({showEditConfirmation: false});
    }

    openDeleteConfirmation() {
        this.setState({showDeleteConfirmation: true});
    }

    closeDeleteConfirmation() {
        this.setState({showDeleteConfirmation: false});
    }

    render() {
        return (
            <div className="container" id="buyGroceryOnline">
                <div className="container-fluid">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
                        <Link to="/profile" type="button"
                              className="btn btn-profile"
                              onClick={this.open}>See
                            Profile
                        </Link>
                        <br/>
                        <h1>Volunteer Posting</h1>
                        <br/>
                        <div className="container-fluid">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                    <tr>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDeleteConfirmation}>
                                                        Delete
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openEditConfirmation}>
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (4)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDeleteConfirmation}>
                                                        Delete
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openEditConfirmation}>
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (4)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDeleteConfirmation}>
                                                        Delete
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openEditConfirmation}>
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (4)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDeleteConfirmation}>
                                                        Delete
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openEditConfirmation}>
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (4)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9" >
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDeleteConfirmation}>
                                                        Delete
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openEditConfirmation}>
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (4)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9" >
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDeleteConfirmation}>
                                                        Delete
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openEditConfirmation}>
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (4)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br/>
                            <Link to="/foodPantryPortal"
                                  className="btn btn-dark btn-md"
                                  type="button">
                                GO BACK TO EMPLOYEE
                                <br/>
                                PORTAL
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Modal className="modal-container"
                               show={this.state.showDeleteConfirmation}
                               onHide={this.closeDeleteConfirmation}
                               animation={true}
                               bsSize="small">
                            <Modal.Body>
                                <div className="row container-fluid">
                                    <div className="map-container">
                                        <b>
                                            Delete this application?
                                        </b>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    onClick={this.closeDeleteConfirmation}>Delete</Button>
                                <Button
                                    onClick={this.closeDeleteConfirmation}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div>
                        <Modal className="modal-container"
                               show={this.state.showEditConfirmation}
                               onHide={this.closeEditConfirmation}
                               animation={true}
                               bsSize="small">
                            <Modal.Body>
                                <div className="row container-fluid">
                                    <div className="map-container">
                                        Edit this volunteer posting here...
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    onClick={this.closeEditConfirmation}>Edit</Button>
                                <Button
                                    onClick={this.closeEditConfirmation}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                </div>
            </div>
        )
    }
}