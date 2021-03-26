import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import logo from "../images/food-pantry-logo.jpg";
import amazon from '../images/amazon.png';
import target from '../images/target.png';
import walmart from '../images/walmart.png';
import "./BuyGroceryOnline.css"

export default class BuyGroceryOnline extends Component {

    render() {
        return (
            <div className="container" id="buyGroceryOnline">
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

                        <br/>
                        <div className="row">
                            <div className="col-6">
                                <h1>TAKE ME TO:</h1>

                                <Link to=""
                                      type="button"
                                className="store">
                                    <img src={amazon} alt={"Amazon"} height="90rem"/>
                                </Link>

                                <Link to=""
                                      type="button"
                                      className="store">
                                    <img src={target} alt={"Target"} height="90rem"/>
                                </Link>

                                <Link to=""
                                      type="button"
                                      className="store">
                                    <img src={walmart} alt={"Walmart"} height="90rem"/>
                                </Link>
                            </div>

                            <div className="col-6">
                                <h1>DELIVER ITEMS TO:</h1>
                                <br/>
                                <h4>
                                    ADDRESS: 125 HOLLYWOOD ST.
                                    <br/>
                                    02145, MA
                                </h4>
                                <br/>
                                <h4>
                                    PHONE:123-457-7685
                                </h4>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col">
                                <Link to="/choosePantry"
                                      className="btn btn-dark btn-lg go-back-to-main-menu"
                                      type="button">
                                    GO BACK TO MAIN
                                    <br/>
                                    MENU
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/donateGrocery"
                                      className="btn btn-dark btn-lg go-back-to-main-menu"
                                      type="button">
                                    GO BACK TO GROCERY
                                    <br/>
                                    LIST
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
