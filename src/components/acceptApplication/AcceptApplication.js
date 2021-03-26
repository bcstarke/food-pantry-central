import React, {Component} from "react";
import logo from "../images/food-pantry-logo.jpg";
import {Link} from "react-router-dom";
import "./AcceptApplication.css"
import Button from "react-bootstrap/Button";

export default class BuyGroceryOnline extends Component {

    render() {
        return (
            <div className="container" id="buyGroceryOnline">
                <div className="container-fluid">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <Link to="/"
                              className="btn btn-dark btn-md profile"
                              type="button">
                            PROFILE
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
                                                <div className="col-3">
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
                                                <div className="col-3">
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
                                                <div className="col-3">
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
                                                <div className="col-3">
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
                                                <div className="col-3">
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
                                    </tbody>
                                </table>
                            </div>
                            <br/>
                            <Link to="/employeePortal"
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