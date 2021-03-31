import React, {Component} from "react";
import logo from "../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class BuyGroceryOnline extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showConfirmationModal: false,
            showDetailsModal: false
        };

        this.openConfirmation = this.openConfirmation.bind(this);
        this.closeConfirmation = this.closeConfirmation.bind(this);

        this.openDetails = this.openDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this)
    }

    openConfirmation() {
        this.setState({showConfirmationModal: true});
    }

    closeConfirmation() {
        this.setState({showConfirmationModal: false});
    }

    openDetails(){
        this.setState({showDetailsModal: true});
    }

    closeDetails(){
        this.setState({showDetailsModal: false});
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
                        <h1>Volunteer Applicants</h1>
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
                                                <div className="col-3">
                                                    Alice
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                    onclick={this.openDetails}>
                                                        See Details
                                                    </Button>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3">
                                                    Alice
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onclick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3">
                                                    Alice
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onclick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3">
                                                    Alice
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onclick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3">
                                                    Alice
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onclick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3">
                                                    Alice
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onclick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br/>
                            <Link to="/employeePortal"
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
                               show={this.state.showConfirmationModal}
                               onHide={this.closeConfirmation}
                               animation={true}
                               bsSize="small">
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Congratulations! You accept Alice's application!
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row container-fluid">
                                                                   <textarea rows="4" cols="50">
                                                                   </textarea>
                                    <Button type="button"
                                            className="btn btn-dark btn-sm">
                                        Send
                                    </Button>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    onClick={this.closeConfirmation}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div>
                        <Modal className="modal-container"
                               show={this.state.showDetailsModal}
                               onHide={this.closeDetails}
                               animation={true}
                               bsSize="small">
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Alice
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row container-fluid">

                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    onClick={this.closeDetails}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>

            </div>
        )
    }
}