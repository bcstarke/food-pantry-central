import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import '@fortawesome/react-fontawesome'
import './PayPalPage.css'
import paypal from "../../images/paypal-transparent.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default class PayPalPage extends Component {
    state = {
        amount: 0
    };

    handleInput = event => {
        this.setState({amount: event.target.value});
    };

    render() {
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                    </div>
                    <div className="row username-row">
                        <div className="paypal-img-row">
                            <img src={paypal} alt={"PayPal Logo"} width="330rem"/>
                        </div>
                    </div>
                    <div className="container paypal-info">
                        <div className="row">
                            <div className="col-12">
                                <form>
                                    <div className="col-auto">
                                        <label className="amount-label"><h3>Email:</h3>
                                        </label>
                                        <div className="input-group mb-2">
                                            <input type="text" className="form-control"
                                                   id="inlineFormInputGroup"
                                                   placeholder="Please enter your email..."/>
                                        </div>
                                        <label className="amount-label"><h3>Amount</h3>
                                        </label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    $
                                                </div>
                                            </div>
                                            <input type="text" className="form-control"
                                                   id="inlineFormInputGroup"
                                                   placeholder="Please enter an amount..."
                                                   onChange={this.handleInput}/>
                                        </div>
                                    </div>
                                    {/*<br/>*/}
                                    <hr/>
                                    <div className="row">
                                        <div className="col-4">
                                            <div>
                                                <h4><b>Amount: </b></h4>
                                            </div>
                                        </div>
                                        <div className="col-5"></div>
                                        <div className="col-3">
                                            <div>
                                               ${this.state.amount}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <div>
                                                <h4><b>Fee: </b></h4>
                                            </div>
                                        </div>
                                        <div className="col-5"></div>
                                        <div className="col-3">
                                            <div>
                                                $0
                                                {/*{this.state.amount}*/}
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-4">
                                            <div>
                                                <h4><b>You Pay: </b></h4>
                                            </div>
                                        </div>
                                        <div className="col-5"></div>
                                        <div className="col-3">
                                            <div>
                                                ${this.state.amount}
                                                {/*{this.state.amount}*/}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br/>

                    </div>
                    <div className="col-12 button-row">
                        <div className="col-3">
                            <Link to="/donateMoney"
                                  class="btn btn-dark btn-lg"
                                  type="button">
                                <div className="button-text-cc-page">
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
