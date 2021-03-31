import React, {Component} from "react";
import logo from "../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import "./AcceptApplication.css"
import Button from "react-bootstrap/Button";

export default class BuyGroceryOnline extends Component {

    render() {
        return (
            <div className="container" id="buyGroceryOnline">
                <div className="container-fluid">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
                        <Link to="/profile" type="button"
                              className="btn btn-profile"
                              onClick={this.open}>See
                            Profile
                        </Link>
                        <br/>
                        <h1>Volunteer Posting</h1>
                        <br/>
                        <div className="container-fluid">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                    <tr>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        x
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (2)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        x
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (2)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        x
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (2)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9">
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        x
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (2)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-3" style={{color:"#ce9466"}}>
                                                    TRUCK DRIVER
                                                </div>
                                                <div className="col-9" >
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        x
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-dark btn-sm option">
                                                        Edit
                                                    </Button>
                                                    <Link to="/applicationDetails"
                                                          className="btn btn-dark btn-sm"
                                                          type="button">
                                                        See Applications (2)
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br/>
                            <Link to="/foodPantryPortal"
                                  className="btn btn-dark btn-md"
                                  type="button">
                                GO BACK TO EMPLOYEE
                                <br/>
                                PORTAL
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}