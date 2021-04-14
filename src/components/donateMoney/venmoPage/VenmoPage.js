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
        const {pantryName} = this.props.location.state
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container" id="choosePantryBox">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>                        <br/>
                        <Link to="/donateMoney" type="button"
                              className="btn go-back-btn-left">
                            Go back
                        </Link>

                        <div className="volunteer-box">
                            <div className="row vol-text">Interested in volunteering?</div>
                            <div className="row">
                                <Link to="/choosePantryV" type="button"
                                      className="btn go-to-volunteer-btn">
                                    Click here
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row username-row">
                        <h2><b>@boston-food-pantry</b></h2>
                    </div>
                    <div className="row col-12">
                        <div className="col-6 barcode-box">
                            <div className="img-row">
                                <img src={barcode} alt={"Bar Code"} width="380rem"/>
                            </div>
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
                            <Link to="/thankYouPayment"
                                  className="btn btn-success btn-lg cc-page-button"
                                  type="button">
                                <div className="button-text-cc-page">
                                    Donate
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

