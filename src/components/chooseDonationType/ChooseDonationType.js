import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './ChooseDonationType.css'
import logo from "../images/food-pantry-logo-b.png";

export default class ChooseDonationType extends Component {

    render() {
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="row">
                            {/*<div className="pantry-info-container container-fluid">*/}
                            {/*    <h2>Pantry you chose: XXX</h2>*/}
                            {/*    <div className="change-pantry-container">*/}
                            {/*        <Link to="/choosePantry"*/}
                            {/*              className="btn btn-info change-pantry-btn"*/}
                            {/*              type="button">*/}
                            {/*            Change Food Pantry*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="row">
                            <div className="d-grid gap-3 button-row">
                                <Link to="/donateMoney"
                                      className="btn btn-dark btn-lg option-select-button"
                                      type="button">
                                    Donate Money
                                </Link>

                                <Link to="/donateGrocery"
                                      className="btn btn-dark btn-lg option-select-button"
                                      type="button">
                                    Donate Groceries
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
