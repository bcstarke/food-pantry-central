import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../choosePantry/ChoosePantry.css'
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
            radius: 1,
            zip:"",
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
                          [event.target.name]: event.target.value
                      })
    }

    handleInputName = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
                          [event.target.name]: event.target.value
                      })
    }


    _showTable = (bool) => {
        if(this.state.zip == ""){
            this.setState({
                              showMessage: false
                          });

            alert(this.state.zip + " Please enter a valid zip code");

            return;
        }

        this.setState({
                          showMessage: true
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
        const {miles} = this.state
        const {zip} = this.state

        return (
            <div className="main-container" id="choosePantry">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
                        <p className="go-donate-tittle">Want to donate instead?</p>

                        <Link to="/donationType" type="button"
                              className="btn btn-go-donate"
                              onClick={this.back}>
                            Click here
                        </Link>
                        <Link to="/" type="button"
                              className="btn btn-go-back"
                              onClick={this.back}>
                            Go back
                        </Link>
                        <h2 className="show-results-text-choosePantry">Please choose a pantry</h2>
                        <div className="row user-input-row">
                            <div className="form-floating zip-input col-sm-3">
                                <input type="text" className="form-control" name="zip" onChange={this.handleInputName}
                                       placeholder="Please enter your zip"/>
                            </div>
                            <div className="show-results-text-choosePantry col-sm-3">
                                <h5 style={{color:"white"}} className="show-results-within-choosePantry">Show results
                                    within...</h5>
                            </div>
                            <div className="radius-drop-down col-sm-3">
                                <select className="form-select" size="1"
                                        aria-label="Default select example"
                                        value={miles}
                                        name="miles"
                                        onChange={this.handleInputName}>
                                    <option value="1">1 Mile</option>
                                    <option value="2">2 Miles</option>
                                    <option value="5">5 Miles</option>
                                    <option value="10">10 Miles</option>
                                    <option value="25">25 Miles</option>
                                </select>
                            </div>
                            <div className="btn-search-pantry">
                                <button type="button" className="btn btn-success btn-lg"
                                        onClick={this._showTable.bind(null, true)}>Search
                                </button>
                            </div>
                        </div>
                        <div className="row results-list">
                            {!this.state.showMessage && (
                                <div className="before-search-text">Results will appear here</div>
                            )}
                            {this.state.showMessage && (
                                <div className="col-12">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">
                                            <li className="list-group-item"
                                                value="greater_boston_food_bank"
                                                style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5 style={{color:"#4b1b1b"}}>The Greater Boston Food Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.open()}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/jobPostingsVolunteer",
                                                            state: {
                                                                pantryName: "The Greater Boston"
                                                                            + " Food Bank"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn see-details-btn"
                                                              type="button"
                                                              style={{backgroundColor:"#6b724e", color:"#4b1b1b"}}
                                                              onClick={() => this.setPantryState(
                                                                  "The Greater Boston Food Bank")}>
                                                            Choose
                                                        </Link>
                                                        <div>
                                                            <Modal className="modal-container"
                                                                   show={this.state.showModal}
                                                                   onHide={this.close}
                                                                   animation={true}
                                                                   bsSize="small">
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title><h3>Pantry
                                                                        Details</h3></Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <div style={{marginTop:"-7rem"}}
                                                                         className="row container-fluid">
                                                                        <div
                                                                            className="map-container">
                                                                            <img src={map}
                                                                                 alt="Google Maps"/>
                                                                        </div>
                                                                        <h4 style={{fontSize:"30px"}}>Address:</h4>
                                                                        <h6 style={{fontSize:"25px"}}>  123
                                                                            Hollywood St., Boston MA,
                                                                            02130</h6>


                                                                        <br/>
                                                                        <br/>
                                                                        <h4 style={{fontSize:"30px"}}>Hours of
                                                                            operation:</h4>
                                                                        <br/>
                                                                        <h6 style={{fontSize:"25px"}}>
                                                                            Mon - Thu: 10:00AM - 4:00PM</h6>
                                                                        <br/>
                                                                        <h6 style={{fontSize:"25px"}}>Sat: 9:00AM - 12:00PM      </h6>
                                                                        <br/>
                                                                        <br/><h4 style={{fontSize:"30px", color:"white"}}>.....................</h4>
                                                                        <h4 style={{fontSize:"30px"}}>Phone:</h4>
                                                                        <h6 style={{fontSize:"25px"}}> (123) 456-7890</h6><br/>
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
                                                <div className="row dist-text1">
                                                    <p className="dist-text">0.6 miles away</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5 style={{color:"#4b1b1b"}}>St. Anthony Shrine / Franscician Food
                                                            Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.open()}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/jobPostingsVolunteer",
                                                            state: {
                                                                pantryName: "St. Anthony Shrine / Franscician Food"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn see-details-btn"
                                                              type="button"
                                                              style={{backgroundColor:"#6b724e", color:"#4b1b1b"}}>
                                                            Choose
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row dist-text1">
                                                    <p className="dist-text">1.4 miles away</p>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5 style={{color:"#4b1b1b"}}>Salvation Army / South End Food
                                                            Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.open()}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/jobPostingsVolunteer",
                                                            state: {
                                                                pantryName: "Salvation Army / South End Food Bank"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn see-details-btn"
                                                              type="button"
                                                              style={{backgroundColor:"#6b724e", color:"#4b1b1b"}}>
                                                            Choose
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row dist-text">
                                                    <p>2.2 miles away</p>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5 style={{color:"#4b1b1b"}}>Haley House Food Pantry</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.open()}>See
                                                            Details
                                                        </Button>
                                                        <Link to={{
                                                            pathname: "/jobPostingsVolunteer",
                                                            state: {
                                                                pantryName: "Haley House Food Pantry"
                                                            }
                                                        }}
                                                              className="btn btn-success details-btn see-details-btn"
                                                              type="button"
                                                              style={{backgroundColor:"#6b724e", color:"#4b1b1b"}}>
                                                            Choose
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row dist-text1">
                                                    <p className="dist-text">5.3 miles away</p>
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