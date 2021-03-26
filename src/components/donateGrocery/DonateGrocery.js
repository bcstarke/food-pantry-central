import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import logo from "../images/food-pantry-logo.jpg";
import "./DonateGrocery.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import map from "../images/googlemap.png";

export default class DonateGrocery extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            showDownload: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        this.download = this.download.bind(this);
        this.closeDownload = this.closeDownload.bind(this)
    }

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

    download(){
        this.setState({showDownload: true});
    }

    closeDownload(){
        this.setState({showDownload: false});
    }


    render() {
        return (
            <div className="main-container" id="donateGroceryList">
                <div className="container-fluid">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <h2>Pantry you chose: XXX</h2>
                                <div className="change-pantry-container">
                                    <Link to="/choosePantry"
                                          className="btn btn-info change-pantry-btn"
                                          type="button">
                                        Change Food Pantry
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="donate-grocery-content container">
                        <div className="row">
                            <div className="col-8">
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
                                                    <div className="col-5">
                                                        TUNA CANS
                                                        <br/>
                                                        CURRENT QUANTITY: 10
                                                    </div>
                                                    <div className="col-7">
                                                        <input className="form-check-input"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn">
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-5">
                                                        TUNA CANS
                                                        <br/>
                                                        CURRENT QUANTITY: 10
                                                    </div>
                                                    <div className="col-7">
                                                        <input className="form-check-input"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn">
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-5">
                                                        TUNA CANS
                                                        <br/>
                                                        CURRENT QUANTITY: 10
                                                    </div>
                                                    <div className="col-7">
                                                        <input className="form-check-input"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn">
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-5">
                                                        TUNA CANS
                                                        <br/>
                                                        CURRENT QUANTITY: 10
                                                    </div>
                                                    <div className="col-7">
                                                        <input className="form-check-input"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn">
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-5">
                                                        TUNA CANS
                                                        <br/>
                                                        CURRENT QUANTITY: 10
                                                    </div>
                                                    <div className="col-7">
                                                        <input className="form-check-input"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn">
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="row">
                                                    <div className="col-5">
                                                        TUNA CANS
                                                        <br/>
                                                        CURRENT QUANTITY: 10
                                                    </div>
                                                    <div className="col-7">
                                                        <input className="form-check-input"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn">
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Link to="/choosePantry"
                                      className="btn btn-dark btn-lg go-back-to-main-menu"
                                      type="button">
                                    GO BACK TO MAIN
                                    <br/>
                                    MENU
                                </Link>
                                <Button type="button"
                                        className="btn btn-dark btn-lg download-pdf-list"
                                        onClick={this.download}>
                                    DOWNLOAD PDF WITH
                                    <br/>
                                    SELECTED ITEMS
                                </Button>

                                <div>
                                    <Modal className="modal-container"
                                           show={this.state.showDownload}
                                           onHide={this.closeDownload}
                                           animation={true}
                                           bsSize="small">
                                        <Modal.Header closeButton>
                                            LIST DOWNLOADED
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row container-fluid">
                                                {/*<div className="progress">*/}
                                                {/*<div className="progress-bar progress-bar-striped"*/}
                                                {/*     role="progressbar" style="width: 10%"*/}
                                                {/*     aria-valuenow="10" aria-valuemin="0"*/}
                                                {/*     aria-valuemax="100"></div>*/}
                                                {/*</div>*/}
                                                <h3>100 %</h3>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                onClick={this.closeDownload}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>

                            </div>

                            <div className="col-4">
                                <h4>HOW DO YOU WANT TO DELIVER YOUR ITEMS?</h4>
                                <Link to="/buyGroceryOnline"
                                      className="btn btn-dark btn-lg donate-options"
                                      type="button">
                                    BUY ONLINE
                                </Link>
                                <br/>
                                <Button type="button"
                                        className="btn btn-dark btn-lg donate-options"
                                        onClick={this.open}>
                                    DROP OFF ITEMS
                                </Button>
                                <div>
                                    <Modal className="modal-container"
                                           show={this.state.showModal}
                                           onHide={this.close}
                                           animation={true}
                                           bsSize="small">
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                DROP ITEMS AT:
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row container-fluid">
                                                <div className="map-container">
                                                    <img src={map}
                                                         alt="Google Maps"/>
                                                </div>
                                                <b>Address: </b>
                                                123
                                                Address St., Boston MA,
                                                02130
                                                <br/>
                                                <b>Hours of
                                                    operation:</b>
                                                <br/>
                                                Mon - Thu: 10:00AM - 4:00PM
                                                <br/>
                                                Sat: 9:00AM - 12:00PM
                                                <br/>
                                                <b>Phone: (123) 456-7890</b>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                onClick={this.close}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}
