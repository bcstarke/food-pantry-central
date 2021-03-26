import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../../images/food-pantry-logo.jpg";
import "./ThankYouPage.css";
import thankYou from "../../images/thankyou.png"

export default class ThankYouPage extends Component {

    render() {
        return (
            <div className="main-container" id="choosePaymentMethod">
                <div className="container-fluid">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="thank-you-text">
                            <h1 className="thank-you"><i>Thank you for your donation!</i></h1>
                            <br/>
                        </div>
                        <br/>
                        <h2>A confirmation email will be sent to name@example.com</h2>
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
                                    <Link to="/choosePantry"
                                          className="btn btn-dark thank-you-button"
                                          type="button">
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
