import React, {Component} from "react";
import "./JobPostingListVolunteer.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import map from "../images/googlemap.png";


export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);


    }



    render() {


        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>VOLUNTEER POSTINGS</h1>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <h6 style={{fontSize:"30px"}}>Pantry you chose: The Greater Boston Food Bank</h6>
                                <div className="change-pantry-container">
                                    <Link to="/choosePantry"
                                          className="btn btn-info button1"
                                          type="button"
                                    style={{fontSize:"20px"}}>
                                        Change Food Pantry
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer-list">
                                <div className="col-10">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Truck driver</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                >See
                                                            Details
                                                        </Button>
                                                        <Link to="/donationType"
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Fork Lift operator</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                >See
                                                            Details
                                                        </Button>
                                                        <Link to="/donationType"
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1  style={{color:"#4b1b1b"}}>Shelf organizer</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                >See
                                                            Details
                                                        </Button>
                                                        <Link to="/donationType"
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Food distributor</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                >See
                                                            Details
                                                        </Button>
                                                        <Link to="/donationType"
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Fork Lift operator 2</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                        >See
                                                            Details
                                                        </Button>
                                                        <Link to="/donationType"
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Fork Lift operator 3</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                        >See
                                                            Details
                                                        </Button>
                                                        <Link to="/donationType"
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                        </div>





                    </div>
                </div>
            </div>






        )
    }
}

