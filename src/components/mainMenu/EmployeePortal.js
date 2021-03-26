import React, {Component} from "react";
import logo from "../images/food-pantry-logo.jpg";
import {Link} from "react-router-dom";
import "./EmployeePortal.css"

export default class EmployeePortal extends Component {

    render() {
        return (
            <div className="container" id="buyGroceryOnline">
                <div className="container-fluid">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <Link to="/addItemToGroceryList"
                                      className="btn btn-dark btn-lg option"
                                      type="button">
                                    Add Items To Grocery List
                                </Link>

                                <Link to="/goToGroceryList"
                                      className="btn btn-dark btn-lg option"
                                      type="button">
                                    Go To My Grocery List
                                </Link>

                                <Link to="/goToVolunteerPosting"
                                      className="btn btn-dark btn-lg option"
                                      type="button">
                                    Go To Volunteer Posting
                                </Link>

                                <Link to="/addNewVolunteerPosting"
                                      className="btn btn-dark btn-lg option"
                                      type="button">
                                    Create A New Volunteer Posting
                                </Link>
                            </div>
                        </div>
            </div>
                </div>
            </div>
        )
    }
}