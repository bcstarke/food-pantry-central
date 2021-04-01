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
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
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
                            <Link to={{
                                pathname: "/donateMoney",
                                state: {
                                    pantryName: pantryName
                                }
                            }}
                                  class="btn btn-dark btn-lg other-payment-page-button"
                                  type="button">
                                <div className="button-text-other-payment">
                                    <div className="left-arrow-icon">
                                        <FontAwesomeIcon icon={faArrowLeft} size='2x'/>
                                    </div>
                                    Go Back
                                </div>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to="/thankYouPayment"
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
