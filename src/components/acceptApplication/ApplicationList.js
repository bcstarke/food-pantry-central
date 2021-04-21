import React, {Component} from "react";
import logo from "../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ApplicationList.css"

export default class ApplicationList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showConfirmationModal: false,
            showDetailsModal: false,
            showDeclineModal: false,
            showMessageModal: false
        };

        this.openConfirmation = this.openConfirmation.bind(this);
        this.closeConfirmation = this.closeConfirmation.bind(this);

        this.openDetails = this.openDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);

        this.openDecline = this.openDecline.bind(this);
        this.closeDecline = this.closeDecline.bind(this);

        this.showMessageModal = this.showMessageModal.bind(this);
        this.closeMessageModal = this.closeMessageModal.bind(this);
    }

    showMessageModal(){
        this.setState({showMessageModal: true})
    }
    closeMessageModal(){
        this.setState({showMessageModal: false})
    }

    openConfirmation() {
        this.setState({showConfirmationModal: true});
    }

    closeConfirmation() {
        this.setState({showConfirmationModal: false});
    }

    openDetails(){
        console.log("open")
        this.setState({showDetailsModal: true});
    }

    closeDetails(){
        this.setState({showDetailsModal: false});
    }

    openDecline(){
        this.setState({showDeclineModal: true});
    }

    closeDecline(){
        this.setState({showDeclineModal: false});
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
                        <Link to="/goToVolunteerPosting" type="button"
                              className="btn btn-go-back">
                            Go back
                        </Link>
                        <h1>Volunteer Applicants</h1>
                        <br/>
                        <div className="container-fluid">

                            <div className="col-11">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <ul className="list-group volunteer-list">
                                        <li className="list-group-item volunteer-box" style={{backgroundColor:"#ffffff"}}>
                                            <div className="row button-row">

                                                <div className="col-5 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                 Alice
                                                </div>

                                                <div className="col-7">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm accept"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm decline"
                                                            onClick={this.openDecline}>
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>

                                            </div>
                                        </li>

                                        <li className="list-group-item volunteer-box" style={{backgroundColor:"#ffffff"}}>
                                            <div className="row button-row">

                                                <div className="col-5 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                    Alice
                                                </div>

                                                <div className="col-7">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDecline}>
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>

                                            </div>
                                        </li>

                                        <li className="list-group-item volunteer-box" style={{backgroundColor:"#ffffff"}}>
                                            <div className="row button-row">

                                                <div className="col-5 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                    Alice
                                                </div>

                                                <div className="col-7">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDecline}>
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>

                                            </div>
                                        </li>

                                        <li className="list-group-item volunteer-box" style={{backgroundColor:"#ffffff"}}>
                                            <div className="row button-row">

                                                <div className="col-5 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                    Alice
                                                </div>

                                                <div className="col-7">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDecline}>
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>

                                            </div>
                                        </li>

                                        <li className="list-group-item volunteer-box" style={{backgroundColor:"#ffffff"}}>
                                            <div className="row button-row">

                                                <div className="col-5 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                    Alice
                                                </div>

                                                <div className="col-7">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDecline}>
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>

                                            </div>
                                        </li>

                                        <li className="list-group-item volunteer-box" style={{backgroundColor:"#ffffff"}}>
                                            <div className="row button-row">

                                                <div className="col-5 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                    Alice
                                                </div>

                                                <div className="col-7">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openConfirmation}>
                                                        Accept
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDecline}>
                                                        Decline
                                                    </Button>

                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option"
                                                            onClick={this.openDetails}>
                                                        See Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Modal className="modal-container"
                               show={this.state.showConfirmationModal}
                               onHide={this.closeConfirmation}
                               animation={true}
                               bsSize="small">
                            <Modal.Header>
                                <Modal.Title>
                                    Are you sure you want to accept Alice's application ?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Button  type="button"
                                         className="btn btn-dark btn-sm" onClick={this.showMessageModal}>
                                    YES
                                </Button>
                                <Button  type="button"
                                         className="btn btn-dark btn-sm" onClick={this.closeConfirmation} style={{float:'right'}}>
                                    NO
                                </Button>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div>
                        <Modal className="modal-container"
                               show={this.state.showMessageModal}
                               onHide={this.showMessageModal}
                               animation={true}
                               bsSize="small">
                            <Modal.Header>
                                <Modal.Title>
                                    Congratulation! You accept Alice's application. You can send message to her.
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row container-fluid">
                                    <label>Enter Email Address:</label>
                                    <input className='form-control' type="email" id="email" name="email" placeholder='optional'
                                    style={{marginBottom:'20px'}}/>
                                        <br/>
                                    <label>Message:</label>
                                        <textarea className='form-control' rows="4" cols="25" placeholder='optional'
                                                  style={{marginBottom:'20px'}}>
                                        </textarea>
                                    <br/>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button type="button"
                                        className="btn btn-dark btn-sm"
                                        onClick={this.closeMessageModal}
                                        onClickCapture={this.closeConfirmation}
                                        style={{marginRight:'187px'}}>
                                    Send Message
                                </Button>
                                <Button
                                    type="button"
                                    className="btn btn-dark btn-sm"
                                    onClick={this.closeMessageModal}
                                    onClickCapture={this.closeConfirmation}>
                                    Don't Send Message
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div>
                        <Modal className="modal-container"
                               show={this.state.showDetailsModal}
                               onHide={this.closeDetails}
                               animation={true}
                               bsSize="small">
                            <Modal.Header>
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

                    <div>
                        <Modal className="modal-container"
                               show={this.state.showDeclineModal}
                               onHide={this.closeDecline}
                               animation={true}
                               bsSize="small">
                            <Modal.Header>
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
                                    onClick={this.closeDecline}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                </div>
            </div>
        )
    }
}