import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import '@fortawesome/react-fontawesome'
import './OtherDonationTypePage.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default class OtherDonationTypePage extends Component {

    render() {
        const {pantryName} = this.props.location.state
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container">
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
                    <br/><br/><br/>
                    <div className="other-info">
                        <div className="row">
                            <div className="col-6 bank-info">
                                <div className="row">
                                    <h2><b>Bank Information</b></h2>
                                </div>
                                <br/>
                                {/*<div className="row">*/}
                                {/*    Name on account: Boston Food Pantry*/}
                                {/*</div>*/}
                            </div>
                            <div className="col-6 bank-info">
                                <h2><b>Cash:</b></h2>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                Name on account: Boston Food Pantry
                            </div>
                            <div className="col-6">
                                Drop money at:
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                Account Number: XXXX-XXXX-XXXX-XXXX
                            </div>
                            <div className="col-6">
                                125 Hollywood Street, 02139, Cambridge MA
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6">
                            <Link to="/thankYouVenmo"
                                  className="btn btn-success btn-lg other-payment-page-button"
                                  type="button">
                                <div className="button-text-other-payment">
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
