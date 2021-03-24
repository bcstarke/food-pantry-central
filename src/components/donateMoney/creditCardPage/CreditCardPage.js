import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './CreditCardPage.css'
import logo from "../../images/food-pantry-logo.jpg";
import creditCardsLong from "../../images/credit-cards-long.png"

export default class CreditCardPage extends Component {

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
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter amount..."/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Cardholder
                                                    Name</h5></label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter name..."/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Credit Card
                                                    Number</h5></label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter Card Number..."/>
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
                                                        <input type="text" className="form-control"
                                                               id="inlineFormInputGroup"
                                                               placeholder="MM/YYYY"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label className="amount-label">
                                                        <h5>Security Code</h5>
                                                    </label>
                                                    <div className="input-group mb-2">
                                                        <input type="text" className="form-control"
                                                               id="inlineFormInputGroup"
                                                               placeholder="XXX"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Zip code</h5>
                                                </label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter zip code..."/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Email</h5>
                                                </label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter Email..."/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/*<h2>Pantry you chose: XXX</h2>*/}
                                {/*<div className="change-pantry-container">*/}
                                {/*    <Link to="/choosePantry"*/}
                                {/*          className="btn btn-info change-pantry-btn"*/}
                                {/*       type="button">*/}
                                {/*        Change Food Pantry*/}
                                {/*    </Link>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
