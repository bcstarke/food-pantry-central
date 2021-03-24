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
