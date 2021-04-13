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
                        <div className="modal-content popup" style={{marginTop:"-25rem"}}>
                            <div className="modal-header">

                                <h4 className="modal-title">Edit grocery item</h4>
                            </div>
                            <div className="modal-body popup-body" style={{color:"#4b1b1b", fontSize:"15px"}}>
                                <div className="review-content">
                                    <div className="row">
                                        <h5 style={{color:"#4b1b1b", fontSize:"20px"}}>Product Name:</h5>
                                        <h6 style={{color:"#4b1b1b", fontSize:"20px"}}>Flour</h6>
                                        <button  className="btn edit-btn" size="sm"
                                                 onClick={() =>this.edit()} style={{color:"#4b1b1b", borderColor:"#4b1b1b", marginTop:"-1px", verticalAlign:"middle"}}>
                                            edit
                                        </button>
                                    </div>
                                    <div className="row">
                                        <h5 style={{color:"#4b1b1b", fontSize:"20px"}}>Product Quantity:</h5>
                                        <h6 style={{color:"#4b1b1b", fontSize:"20px"}}>8 Kg</h6>
                                        <button className="btn edit-btn" size="sm"
                                                onClick={() => this.edit()} style={{color:"#4b1b1b", borderColor:"#4b1b1b", marginTop:"-1px", verticalAlign:"middle"}}>edit
                                        </button>
                                    </div>
                                    <div className="row">
                                        <h5 style={{color:"#4b1b1b", fontSize:"20px"}}>Additional comments:</h5>
                                        <h6 style={{color:"#4b1b1b", fontSize:"20px"}}>The package needs to be unopened and not expired</h6>
                                        <button className="btn edit-btn" size="sm"
                                                onClick={() => this.edit()} style={{color:"#4b1b1b", borderColor:"#4b1b1b", marginTop:"-1px", verticalAlign:"middle"}}>edit
                                        </button>

                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button to="/foodPantryPortal"
                                        type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeDetails()}>Cancel changes
                                </Button>
                                <Button to="/foodPantryPortal"
                                        type="button" className="btn btn-success popup-btn1"
                                        onClick={() =>this.closeDetails()}>Save changes
                                </Button>
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

