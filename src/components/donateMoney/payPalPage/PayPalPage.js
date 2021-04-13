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

    handleInputName = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
                          [event.target.name]: event.target.value
                      })
    }


    render() {
        const {pantryName} = this.props.location.state
        const {ccName} = this.props.location.state
        const {ccEmail} = this.state
        const {ccDollarAmount} = this.state

        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
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
                        <div className="paypal-img-row">
                            <img src={paypal} alt={"PayPal Logo"} width="330rem"/>
                        </div>
                    </div>
                    <div className="container paypal-info">
                        {/*<div className="row">*/}
                        <div className="col-10">
                            <form>
                                <div className="col-auto">
                                    <label className="amount-label">
                                        <h3 className="amount-label-text">Email:</h3>
                                    </label>
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control"
                                               id="inlineFormInputGroup"
                                               placeholder="Please enter your email..."
                                               value={ccEmail}
                                               name="ccEmail"
                                               onChange={this.handleInputName}/>
                                    </div>
                                    <label className="amount-label">
                                        <h3 className="amount-label-text">Amount:</h3>
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
                                               value={ccDollarAmount}
                                               name="ccDollarAmount"
                                               onChange={this.handleInputName}/>
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
                                        <div className="paypal-amount-text">
                                            ${ccDollarAmount}
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
                                        <div className="paypal-amount-text">
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
                                        <div className="paypal-amount-text">
                                            ${ccDollarAmount}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br/>
                    </div>
                    <div className="col-12 button-row">
                        <div className="col-3">
                            <Link to={{
                                      pathname: "/thankYouPayment",
                                      state: {
                                          pantryName: this.state.pantryName,
                                          ccName: this.state.ccName,
                                          ccDollarAmount: this.state.ccDollarAmount,
                                          ccEmail: this.state.ccEmail
                                      }
                                  }}
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
