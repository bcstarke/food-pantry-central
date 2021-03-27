import React, {Component} from "react";
import "./Profile.css"
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
                    <Link to="/foodPantryPortal"type="button"
                            className="btn btn-profile"
                           >Go to Portal
                    </Link>
                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>Your Profile information</h1>
                        <div className="btn-wrapper">

                            <div className="review-content">
                                <div className="row">
                                    <h5>Food Pantry Name:</h5>
                                    <h6> Salvation Army Food Pantry</h6>
                                    <button  className="btn edit-btn" size="sm">edit

                                    </button>
                                </div>
                                <div className="row">
                                    <h5>Adress:</h5>
                                    <h6>123 Cherry st, Ma, 02139</h6>
                                    <button className="btn edit-btn" size="sm"
                                            >edit
                                    </button>
                                </div>
                                <div className="row">
                                    <h5>Bank information:</h5>
                                    <h6>xxxxxxxxx</h6>
                                    <button className="btn edit-btn" size="sm"
                                            o>edit
                                    </button>

                                </div>

                            </div>




                        </div>


                    </div>
                </div>
            </div>






        )
    }
}

