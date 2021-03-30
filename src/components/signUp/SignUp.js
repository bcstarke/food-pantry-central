import React, {Component} from "react";
import "./SignUp.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";

export default class MainMenu extends Component {

    render() {
        return (
            <div className="main-container" id="home">
                <div className="container" id="mainMenuBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="sign-in-container container">
                            <form>
                                <h3>Sign Up</h3>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" className="form-control"
                                           placeholder="First name"/>
                                </div>

                                <div className="form-group">
                                    <label>Last name</label>
                                    <input type="text" className="form-control"
                                           placeholder="Last name"/>
                                </div>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control"
                                           placeholder="Enter email"/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"
                                           placeholder="Enter password"/>
                                </div>
                                <Link type="button" to="/foodPantryPortal" className="btn btn-success btn-block">Sign Up
                                </Link>
                                <br/><br/><br/>
                                {/*<div className="sign-up-text text-right">Don't have an account? Sign up here:</div>*/}
                                <div className="sign-up-text text-center">
                                    Already have an account? <Link className="btn btn-primary sign-up-btn"
                                                                 type="button"
                                                                 to="/signIn">Click here to Sign in</Link>
                                </div>
                                <br/><br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
