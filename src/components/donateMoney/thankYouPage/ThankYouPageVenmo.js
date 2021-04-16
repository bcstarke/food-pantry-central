import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../../images/food-pantry-logo-b.png";
import "./ThankYouPage.css";
import thankYou from "../../images/thankyou.png"

export default class ThankYouPage extends Component {

    render() {
        return (
            <div className="main-container" id="choosePaymentMethod">
                <div className="container-fluid">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
                        <br/>
                        <div className="volunteer-box">
                            <div className="row vol-text">Interested in volunteering?</div>
                            <div className="row">
                                <Link to="/choosePantryV" type="button"
                                      className="btn go-to-volunteer-btn">
                                    Click here
                                </Link>
                            </div>
                        </div>
                        <div className="thank-you-text">
                            <h1 className="thank-you"><i>Thank you for your donation!</i></h1>
                            <br/>
                        </div>
                        <p className="info-text">Every $3 donated buys enough food to feed a family of four</p>
                        <br/>
                        {/*<h2>A confirmation email will be sent to {ccEmail}</h2>*/}
                    </div>
                    <div className="row nav-buttons">
                        {/*<div className="nav-buttons">*/}
                        <div className="row">
                            <div className="col-12 thank-you-text">
                                <div className="col-5">
                                    <Link to="/"
                                          className="btn btn-dark thank-you-button"
                                          type="button">
                                        <div className="button-text">
                                            Go to Main Page
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-2">
                                </div>
                                <div className="col-5">
                                    <Link to="/donationType"
                                          className="btn btn-dark thank-you-button"
                                          type="button">
                                        <div className="button-text">
                                            Donate to another pantry
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*</div>*/}
                    </div>
                    <div className="hug-img">
                        <img src={thankYou} alt="Thank you" height="250rem"/>
                    </div>
                </div>
            </div>
        )
    }
}
