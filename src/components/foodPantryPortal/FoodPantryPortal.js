import React, {Component} from "react";
import "./FoodPantryPortal.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";


export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);


    }



    render() {


        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <Link to="/profile" type="button"
                            className="btn btn-profile"
                            onClick={this.open}>See
                        Profile
                    </Link>
                    <div className="header-box container header">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>

                        <br/>
                        <h1>PORTAL</h1>
                        <div className="btn-wrapper">
                            <div className="row">
                                <Link to="/createItem" type="button" className="btn btn-success buttonPortal" >
                                    Add new item to My Grocery List
                                </Link>
                                <Link to="/groceryList" type="button" className="btn btn-success buttonPortal" >
                                    Go to My Grocery List
                                </Link>
                            </div>
                            <div className="row">
                                <Link to="/goToVolunteerPosting" type="button" className="btn btn-success buttonPortal" >
                                    Go to My Volunteer Postings
                                </Link>
                                <Link to="/createPost" type="button" className="btn btn-success buttonPortal" >
                                    Create a new Volunteer Posting
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>






        )
    }
}

