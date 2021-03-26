import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './DonateMoney.css';
import creditCard from '../images/credit-cards.jpg';
import paypal from '../images/paypal.png';
import venmo from '../images/venmo.png';
import logo from "../images/food-pantry-logo.jpg";
import otherOptionMoney from '../images/other-option-money.png'

export default class DonateMoney extends Component {

    render() {
        return (
            <div className="main-container" id="choosePaymentMethod">
                <div className="container-fluid">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <h2>Pantry you chose: XXX</h2>
                                <div className="change-pantry-container">
                                    <Link to="/choosePantry"
                                          className="btn btn-info change-pantry-btn"
                                          type="button">
                                        Change Food Pantry
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container-fluid payment-method-container">
                                <h2>Choose your payment type</h2>
                                <div className="payment-methods">
                                        <div className="row">
                                            <div className="col-6">
                                                <Link to="/creditCard"
                                                      className="btn btn-dark option-select-button"
                                                      type="button">
                                                    <img src={creditCard} alt={"Credit Card"}
                                                         height="200rem"/>
                                                </Link>
                                                <Link to="/paypal"
                                                      className="btn btn-dark option-select-button"
                                                      type="button">
                                                    <img src={paypal} alt={"PayPal"} height="200rem"/>
                                                </Link>
                                            </div>
                                        </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Link to="/venmo"
                                                  className="btn btn-dark option-select-button"
                                                  type="button">
                                                <img src={venmo} alt={"Venmo"} height="200rem"/>

                                            </Link>
                                            <Link to="/otherDonationType"
                                                  className="btn btn-dark option-select-button"
                                                  type="button">
                                                <div className="row">
                                                    <div className="col-10">
                                                        <h4>Other payment options</h4>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img src={otherOptionMoney} alt={"Other"
                                                                                         + " payment"
                                                                                         + " options"}
                                                             height="150rem"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
