import React, {Component} from "react";
import "./MainMenu.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";

export default class MainMenu extends Component {

    render() {
        return (
            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>What would you like to do?</h1>
                        <div className="row button-container" style={{marginTop: "-4rem"}}>
                            <div className="d-grid gap-2">
                                <Link to="/donationType"
                                      className="btn btn-success buttonPortal"
                                      type="button"
                                      style={{height:"10rem", fontSize:"70px", paddingTop: "2rem"}}>
                                    Donate
                                </Link>
                                <Link to="/choosePantryV"
                                      className="btn btn-success buttonPortal"
                                      type="button"
                                      style={{height:"10rem", fontSize:"70px", paddingTop: "2rem"}}>
                                    Volunteer
                                </Link>
                                <h1>Food Pantry managers and employees:</h1>
                                <Link to="/signIn"
                                      className="btn btn-success buttonPortal"
                                      type="button"
                                      style={{height:"10rem", fontSize:"50px", paddingTop: "3rem"}}>
                                    Click here to sign-in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
