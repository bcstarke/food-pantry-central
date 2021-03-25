import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CCReviewPage.css'
import logo from "../../images/food-pantry-logo.jpg";
import creditCardsLong from "../../images/credit-cards-long.png"
import {Link} from "react-router-dom";
import '@fortawesome/react-fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


export default class CCReviewPage extends Component {

    render() {
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <img src={creditCardsLong} alt={"Credit Cards"} height="80rem"/>
                                <br/>
                            </div>
                            <br/>
                            <div className="container-fluid cc-info">
                                <div className="row">
                                    <div className="col-6">
                                        <form>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Amount</h5>
                                                </label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">
                                                            $
                                                        </div>
                                                    </div>
                                                    <input type="text" readOnly
                                                           className="form-control-plaintext"
                                                           id="staticEmail"
                                                           value="  25"/>

                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Cardholder
                                                    Name</h5></label>
                                                <div className="input-group mb-2">
                                                    <input type="text" readOnly
                                                           className="form-control-plaintext"
                                                           id="staticEmail"
                                                           value="Ben Starke"/>

                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Credit Card
                                                    Number</h5></label>
                                                <div className="input-group mb-2">
                                                    <input type="text" readOnly
                                                           className="form-control-plaintext"
                                                           id="staticEmail"
                                                           value="7297-8262-8262-3411"/>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-6">
                                        <form>
                                            <div className="row container">
                                                <div className="col-6">
                                                    <label className="amount-label">
                                                        <h5>Expiration Date</h5>
                                                    </label>
                                                    <div className="input-group mb-2">
                                                        <input type="text" readOnly
                                                               className="form-control-plaintext"
                                                               id="staticEmail"
                                                               value="03/2025"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label className="amount-label">
                                                        <h5>Security Code</h5>
                                                    </label>
                                                    <div className="input-group mb-2">
                                                        <input type="text" readOnly
                                                               className="form-control-plaintext"
                                                               id="staticEmail"
                                                               value="367"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Zip code</h5>
                                                </label>
                                                <div className="input-group mb-2">
                                                    <input type="text" readOnly
                                                           className="form-control-plaintext"
                                                           id="staticEmail"
                                                           value="12345"/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Email</h5>
                                                </label>
                                                <div className="input-group mb-2">
                                                    <input type="text" readOnly
                                                           className="form-control-plaintext"
                                                           id="staticEmail"
                                                           value="name@example.com"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row">*/}
                        {/*<div className="button-row">*/}
                        <div className="col-12 button-row">
                            <div className="col-3">
                                <Link to="/creditCard"
                                      class="btn btn-dark btn-lg cc-page-button"
                                      type="button">
                                    <div className="button-text-cc-review">
                                        <div className="left-arrow-icon">
                                            <FontAwesomeIcon icon={faArrowLeft} size='2x'/>
                                        </div>
                                        Go Back
                                    </div>
                                </Link>
                            </div>
                            <div className="col-3">
                                <Link to="/thankYouPayment"
                                      className="btn btn-success btn-lg cc-page-button"
                                      type="button">
                                    <div className="button-text-cc-review">
                                        Pay
                                        <div className="right-arrow-icon">
                                            <FontAwesomeIcon icon={faArrowRight} size='2x'/>
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}