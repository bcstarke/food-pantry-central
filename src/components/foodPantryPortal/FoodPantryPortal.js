import React, {Component} from "react";
import "./FoodPantryPortal.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);


    }



    render() {


        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>PORTAL</h1>
                        <div className="btn-wrapper">
                            <div className="row">
                                <button type="button" className="btn btn-success buttonPortal" >
                                    Add new item to My Grocery List
                                </button>
                                <button type="button" className="btn btn-success buttonPortal" >
                                    Go to My Grocery List
                                </button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-success buttonPortal" >
                                    Go to My Volunteer Postings
                                </button>
                                <button type="button" className="btn btn-success buttonPortal" >
                                    Create a new Volunteer Posting
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>






        )
    }
}

