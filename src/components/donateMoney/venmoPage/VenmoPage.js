import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import '@fortawesome/react-fontawesome'
import venmo from "../../images/venmo.png"
import barcode from "../../images/barcode.png"
import './VenmoPage.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default class VenmoPage extends Component {

    render() {
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                    </div>
                    <div className="row username-row">
                        <h2><b>@boston-food-pantry</b></h2>
                    </div>
                    <div className="row col-12">
                        <div className="img-row">
                            <img src={barcode} alt={"Bar Code"} width="380rem"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="pantry-info-container container-fluid">
                            <img src={venmo} alt={"Venmo"} height="220rem" className="venmo-img"/>
                            <br/>
                        </div>
                        <br/>
                    </div>
                    <div className="col-12 button-row">
                        <div className="col-3">
                            <Link to="/donateMoney"
                                  class="btn btn-dark btn-lg venmo-page-button"
                                  type="button">
                                <div className="button-text-venmo-page">
                                    <div className="left-arrow-icon">
                                        <FontAwesomeIcon icon={faArrowLeft} size='2x'/>
                                    </div>
                                    Go Back
                                </div>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/thankYouPayment"
                                  className="btn btn-success btn-lg venmo-page-button"
                                  type="button">
                                <div className="button-text-venmo-page">
                                    I Donated
                                    <div className="right-arrow-icon">
                                        <FontAwesomeIcon icon={faArrowRight} size='2x'/>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

