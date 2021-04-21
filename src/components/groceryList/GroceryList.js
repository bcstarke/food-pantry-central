import React, {Component} from "react";
import "./GroceryList.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import map from "../images/googlemap.png";


export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);
        this.state= {
            showDetails: false,
            showDelete: false,
        }
    }

    openDetails() {
        console.log("helloooooo");
        this.setState({
                          showDetails:true,

                      })
    }

    closeDetails() {
        console.log("helloooooo");
        this.setState({
                          showDetails:false,

                      })
    }

    openDelete() {
        console.log("helloooooo");
        this.setState({
                          showDelete:true,

                      })
    }

    closeDelete() {
        console.log("helloooooo");
        this.setState({
                          showDelete:false,

                      })
    }

    edit() {
        alert("Final version item will have the functionality of being edited")
    }



    render() {


        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <Link to="/foodPantryPortal"
                                className="btn btn-go-back" style={{marginTop:"-15px"}}>
                            Go to Portal
                        </Link>
                        <br/>
                        <h1>Grocery List</h1>
                        <Link to="/profile" type="button"
                              className="btn btn-profile"
                              onClick={this.open}>See
                            Profile
                        </Link>
                        <div className="volunteer-list" style={{marginLeft:"6rem"}}>
                                <div className="col-10">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">
                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Flour</h1>

                                                    </div>

                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.openDetails()}>See
                                                            Details
                                                        </Button>
                                                        <Button
                                                              className="btn btn-success details-btn see-details-btn"
                                                              type="button"
                                                              onClick={() =>this.openDelete()}
                                                              style={{backgroundColor:"#6b724e", color:"#bfa675"}}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:"-1.5rem", marginLeft:"9rem"}}>
                                                    <p>Current Quantity: 8 kg</p>
                                                </div>

                                            </li>
                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Flour</h1>

                                                    </div>

                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.openDetails()}>See
                                                            Details
                                                        </Button>
                                                        <Button
                                                            className="btn btn-success details-btn see-details-btn"
                                                            type="button"
                                                            onClick={() =>this.openDelete()}
                                                            style={{backgroundColor:"#6b724e", color:"#bfa675"}}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:"-1.5rem", marginLeft:"9rem"}}>
                                                    <p>Current Quantity: 8 kg</p>
                                                </div>

                                            </li>
                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Flour</h1>

                                                    </div>

                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.openDetails()}>See
                                                            Details
                                                        </Button>
                                                        <Button
                                                            className="btn btn-success details-btn see-details-btn"
                                                            type="button"
                                                            onClick={() =>this.openDelete()}
                                                            style={{backgroundColor:"#6b724e", color:"#bfa675"}}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:"-1.5rem", marginLeft:"9rem"}}>
                                                    <p>Current Quantity: 8 kg</p>
                                                </div>

                                            </li>
                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                            <div className="row button-row">
                                                <div className="col-6 pantry-name">
                                                    <h1 style={{color:"#4b1b1b"}}>Flour</h1>

                                                </div>

                                                <div className="col-6">
                                                    <Button type="button"
                                                            className="btn btn-success details-btn see-details-btn"
                                                            onClick={() =>this.openDetails()}>See
                                                        Details
                                                    </Button>
                                                    <Button
                                                        className="btn btn-success details-btn see-details-btn"
                                                        type="button"
                                                        onClick={() =>this.openDelete()}
                                                        style={{backgroundColor:"#6b724e", color:"#bfa675"}}>
                                                        Delete
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="row" style={{marginTop:"-1.5rem", marginLeft:"9rem"}}>
                                                <p>Current Quantity: 8 kg</p>
                                            </div>

                                        </li>
                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Flour</h1>

                                                    </div>

                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.openDetails()}>See
                                                            Details
                                                        </Button>
                                                        <Button
                                                            className="btn btn-success details-btn see-details-btn"
                                                            type="button"
                                                            onClick={() =>this.openDelete()}
                                                            style={{backgroundColor:"#6b724e", color:"#bfa675"}}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:"-1.5rem", marginLeft:"9rem"}}>
                                                    <p>Current Quantity: 8 kg</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                        </div>




                    </div>

                    {
                        this.state.showDetails?
                        <div id="child-input-container" style={{height:"30rem", backgroundColor: "#4b1b1b", marginTop:"-30rem", marginLeft:"4rem"}}>
                            <h3>Flour</h3>
                            <div className="review-content">


                                <div className="row">
                                    <h5  style={{marginLeft:"20rem"}}>Current product Quantity:</h5>
                                    <input type="number" id="quantity" name="quantity" min="1" max="100" className="form-control form-font"
                                           placeholder="0"  style={{width:"5rem", fontSize:"20px", backgroundColor:"#ffffff"}} onChange={this.handleInputName} />
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>Kg</h6>
                                </div>

                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Quantity needed:</h5>
                                    <input type="number" id="quantity" name="quantity" min="1" max="100" className="form-control form-font"
                                           placeholder="8"  style={{width:"5rem", fontSize:"20px", backgroundColor:"#ffffff"}} onChange={this.handleInputName} />
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>Kg</h6>
                                </div>
                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Additional notes:</h5>
                                <h6 style={{fontSize:"20px", marginTop:"10px"}}>The item can't be expired or opened</h6>
                                </div>
                                <div className="row" style={{marginTop:"2rem"}}>
                                <h5 style={{marginLeft:"20rem"}}>Product Suggestion:</h5>

                                <a
                                    href="https://www.walmart.com/ip/Great-Value-All-Purpose-Flour-5-lb/10403017" target="_blank">
                                    <img style={{height:"5rem", width:"5rem", borderRadius: "50%", marginTop: "-1rem"}} src="https://i5.walmartimages.com/asr/3b38c066-8ec5-41be-8548-e5c413478d7a_4.a7ee29201ea1b52b086a97db4227b273.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="Italian Trulli"/>
                                </a>

                                    <a
                                        href="https://www.walmart.com/ip/King-Arthur-Flour-Unbleached-Bread-Flour-80-oz/10535108" target="_blank">
                                        <img style={{height:"5rem", width:"5rem", borderRadius: "50%", marginTop: "-1rem"}} src="https://i5.walmartimages.com/asr/000e6f83-2c72-42d6-9eb6-4a8fe4bcf3cf.106481bdfd7af01e42a0e9ec7b035706.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="Italian Trulli"/>
                                    </a>
                                </div>


                                <div className="row" style={{marginLeft:"20rem", marginTop:"20px", marginBottom:"30px"}}>
                                <button

                                    type="button" className="btn btn-success button1" style={{backgroundColor:"#4b1b1b", borderColor:"#ce9466", border:"solid"}}
                                    onClick={() =>this.closeDetails()}>Don't save changes
                                </button>

                                    <button

                                        type="button" className="btn btn-success button1" style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}
                                        onClick={() =>this.closeDetails()}>Save changes
                                    </button>

                                </div>

                            </div>


                        </div>
                                              :null}


                    {
                        this.state.showDelete?
                        <div className="modal-content popup" style={{marginTop:"-25rem"}}>
                            <div className="modal-header">

                                <h4 className="modal-title">Warning!</h4>
                            </div>
                            <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                                <p>Are you sure yo want to delete this item?</p>
                            </div>
                            <div className="modal-footer">
                                <Button to="/foodPantryPortal"
                                        type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeDelete()}>Don't delete
                                </Button>
                                <Button to="/foodPantryPortal"
                                      type="button" className="btn btn-success popup-btn1"
                                      onClick={() =>this.closeDelete()}>Delete
                                </Button>
                            </div>
                        </div>
                                             :null}
                </div>


            </div>






        )
    }
}

