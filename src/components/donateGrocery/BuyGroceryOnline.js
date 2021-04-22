import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import logo from "../images/food-pantry-logo-b.png";
import amazon from '../images/amazon.png';
import target from '../images/target.png';
import walmart from '../images/walmart.png';
import "./BuyGroceryOnline.css"

export default class BuyGroceryOnline extends Component {

    render() {
        // const {pantryName} = this.props.location.state
        return (
            <div className="container" id="buyGroceryOnline">
                <div className="container-fluid">
                    <p className="go-donate-tittle">Want to volunteer instead?</p>

                    <Link to="/" type="button"
                          className="btn btn-go-donate"
                          onClick={this.back}>
                        Click here
                    </Link>
                    <Link to="/donateGrocery" type="button"
                          className="btn btn-go-back"
                          onClick={this.back}>
                        Go back
                    </Link>
                </div>
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

                                <a href="https://www.amazon.com/"
                                      type="button"
                                className="store">
                                    <img src={amazon} alt={"Amazon"} height="100rem"/>
                                </a>

                                <a href="https://www.walmart.com/?&adid=22222222220800010149&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=505346679064&wl4=kwd-13273026&wl5=9009732&wl6=&wl7=&wl8=&veh=sem&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgMny5NQx2oztsNJsLnQNHb4a8_GjiNGeI4YBWJsuWFZpPN5QF2cnkoaAlSkEALw_wcB&gclsrc=aw.ds"
                                      type="button"
                                      className="store">
                                    <img src={target} alt={"Target"} height="100rem"/>
                                </a>

                                <a href="https://www.target.com/"
                                      type="button"
                                      className="store">
                                    <img src={walmart} alt={"Walmart"} height="100rem"/>
                                </a>
                            </div>

                            <div className="col-6">
                                <h1>DELIVER ITEMS TO:</h1>
                                <br/>
                                <h4 className={"text"}>
                                    ADDRESS: 125 HOLLYWOOD ST.
                                    <br/>
                                    02145, MA
                                </h4>
                                <br/>
                                <h4 className={"text"}>
                                    PHONE:123-457-7685
                                </h4>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col">
                                <Link to="/"
                                      className="btn btn-dark btn-lg go-back-to-main-menu"
                                      type="button">
                                    GO BACK TO MAIN
                                    <br/>
                                    MENU
                                </Link>
                            </div>
                            <div className="col">
                                <Link
                                      to="/donateGrocery"
                                          // state: {
                                          //     pantryName: pantryName
                                          // }
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
        )
    }
}
