import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './ChoosePantry.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from '../images/food-pantry-logo-b.png';
import map from '../images/googlemap.png';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

export default class ChoosePantry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            showModal: false,
            pantryName: "hello123",
            radius: 1
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    _showTable = (bool) => {
        this.setState({
                          showMessage: bool
                      });
    };

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }


    setPantryState = (newPantryName) => {
        this.setState(prevState => ({
            pantryName: newPantryName
        }))
    }

    render() {
        return (
            <div className="main-container" id="choosePantry">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        {/*<h1>Welcome to Food Pantry Central!</h1>*/}
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h2>Please choose a pantry</h2>
                        <div className="row user-input-row">
                            <div className="form-floating zip-input col-sm-3">
                                <input type="text" className="form-control"
                                       placeholder="Please enter your zip"/>
                            </div>
                            <div className="show-results-text col-sm-3">
                                <h5>Show results within...</h5>
                            </div>
                            <div className="radius-drop-down col-sm-3">
                                <select className="form-select" aria-label="Default select example"
                                        value={this.state.radius}>
                                    <option value="1">1 Mile</option>
                                    <option value="2">2 Miles</option>
                                    <option value="5">5 Miles</option>
                                    <option value="10">10 Miles</option>
                                    <option value="25">25 Miles</option>
                                </select>
                            </div>
                            <div className="btn-search-pantry">
                                <button type="button" className="btn btn-success"
                                        onClick={this._showTable.bind(null, true)}>Search
                                </button>
                            </div>
                        </div>
                        <div className="row results-list">
                            {this.state.showMessage && (
                                <div className="col-10">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">
                                            <li className="list-group-item"
                                                value="greater_boston_food_bank">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5>The Greater Boston Food Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn"
                                                                onClick={this.open}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/donateMoney",
                                                            state: {
                                                                pantryName: "The Greater Boston"
                                                                            + " Food Bank"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn"
                                                              type="button"
                                                              onClick={() => this.setPantryState("The Greater Boston Food Bank")}>
                                                            Choose
                                                        </Link>
                                                        {/*onClick={(e) => this.setPantryState(*/}
                                                        {/*e)}*/}

                                                        {/*<Button type="button" onClick={(e) => this.setPantryState("The Greater Boston Food Bank")}>click here</Button>*/}
                                                        {/*<div className="alert alert-primary"*/}
                                                        {/*     role="alert">*/}
                                                        {/*    {this.state.pantryName}*/}
                                                        {/*</div>*/}
                                                        <div>
                                                            <Modal className="modal-container"
                                                                   show={this.state.showModal}
                                                                   onHide={this.close}
                                                                   animation={true}
                                                                   bsSize="small">
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Pantry
                                                                        Details</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <div
                                                                        className="row container-fluid">
                                                                        <div
                                                                            className="map-container">
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
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5>St. Anthony Shrine / Franscician Food
                                                            Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn"
                                                                onClick={this.open}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/donateMoney",
                                                            state: {
                                                                pantryName: "St. Anthony Shrine / Franscician Food"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn"
                                                              type="button">
                                                            Choose
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5>Salvation Army / South End Food
                                                            Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn"
                                                                onClick={this.open}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/donateMoney",
                                                            state: {
                                                                pantryName: "Salvation Army / South End Food Bank"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn"
                                                              type="button">
                                                            Choose
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5>Haley House Food Pantry</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn"
                                                                onClick={this.open}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/donateMoney",
                                                            state: {
                                                                pantryName: "Haley House Food Pantry"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn"
                                                              type="button">
                                                            Choose
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
