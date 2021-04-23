import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Route} from 'react-router-dom'
import './DonateMoney.css';
import creditCard from '../images/credit-cards.jpg';
import paypal from '../images/paypal.png';
import venmo from '../images/venmo.png';
import logo from "../images/food-pantry-logo-b.png";
import otherOptionMoney from '../images/other-option-money.png'
import ChoosePantry from "../choosePantry/ChoosePantry";

export default class DonateMoney extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const pantryName = this.props.location.state
    }


    render() {

    const {pantryName} = (this.props.location.state != undefined ? this.props.location.state : " ")
        return (
            <div className="main-container" id="choosePaymentMethod">
                <div className="container-fluid">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
                        <br/>
                        <Link to="/choosePantry" type="button"
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
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <h2>Pantry you chose: {pantryName}</h2>
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
                        <div className="row">
                            <div className="container-fluid payment-method-container">
                                <h1>Choose your payment type</h1>
                                <div className="payment-methods">
                                        <div className="row">
                                            <div className="col-6">
                                                <Link
                                                      to=
                                                          {{
                                                              pathname: "/creditCard",
                                                              state: {
                                                                  pantryName: pantryName
                                                              }
                                                          }}
                                                      className="btn btn-dark option-select-button"
                                                      type="button">
                                                    <img src={creditCard} alt={"Credit Card"}
                                                         height="200rem"/>
                                                </Link>
                                                <Link
                                                      to=
                                                          {{
                                                              pathname: "/paypal",
                                                              state: {
                                                                  pantryName: pantryName
                                                              }
                                                          }}
                                                      className="btn btn-dark option-select-button"
                                                      type="button">
                                                    <img src={paypal} alt={"PayPal"} height="200rem"/>
                                                </Link>
                                            </div>
                                        </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <Link  to=
                                                  {{
                                                      pathname: "/venmo",
                                                      state: {
                                                          pantryName: pantryName
                                                      }
                                                  }}
                                                  className="btn btn-dark option-select-button"
                                                  type="button">
                                                <img src={venmo} alt={"Venmo"} height="200rem"/>

                                            </Link>
                                            <Link to=
                                                  {{
                                                      pathname: "/otherDonationType",
                                                      state: {
                                                          pantryName: pantryName
                                                      }
                                                  }}
                                                  className="btn btn-dark option-select-button"
                                                  type="button">
                                                <div className="row">
                                                    <div className="col-10">
                                                        <h1>Other payment options</h1>
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
