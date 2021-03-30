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
        return (
            <div className="main-container" id="choosePaymentMethod">
                <div className="container-fluid">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <h2>Pantry you chose: {this.props.pantryName}</h2>
                                <div>{this.props.pantryName}</div>
                                <div className="change-pantry-container">
                                    {/*<Route path="/choosePantry" exact={true} render={(props) =>*/}
                                    {/*    <div>*/}
                                    {/*        <ChoosePantry*/}
                                    {/*            pantryName={this.props.pantryName}*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*}>*/}
                                    {/*</Route>*/}
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
