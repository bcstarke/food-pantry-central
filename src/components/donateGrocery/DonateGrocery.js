import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import logo from "../images/food-pantry-logo-b.png";
import "./DonateGrocery.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import map from "../images/googlemap.png";

export default class DonateGrocery extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            showDownload: false,
            showDetailsModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        this.download = this.download.bind(this);
        this.closeDownload = this.closeDownload.bind(this)

        this.details = this.details.bind(this)
        this.closeDetails = this.closeDetails.bind(this)
    }

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

    download(){
        this.setState({showDownload: true});
    }

    closeDownload(){
        this.setState({showDownload: false});
    }

    details(){
        this.setState({showDetailsModal:true});
    }

    closeDetails(){
        this.setState({showDetailsModal:false});
    }

    render() {
        return (
            <div className="main-container" id="donateGroceryList">
                <div className="container-fluid">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <p className="go-donate-tittle">Want to volunteer instead?</p>

                        <Link to="/choosePantryV" type="button"
                              className="btn btn-go-donate"
                              onClick={this.back}>
                            Click here
                        </Link>
                        <Link to="/choosePantryG" type="button"
                              className="btn btn-go-back"
                              onClick={this.back}>
                            Go back
                        </Link>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <h2>Pantry you chose: XXX</h2>
                                <div className="change-pantry-container">
                                    <Link to="/choosePantryG"
                                          className="btn btn-info button1"
                                          type="button"
                                          style={{fontSize:"20px"}}>
                                        Change Food Pantry
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="donate-grocery-content container">
                        <div className="row">
                            <div className="col-8">
                                <div className="col-10 volunteer-list">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">
                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff", marginTop:'3px'}}>
                                                <div className="row button-row">
                                                    <div className="col-5 pantry-name" style={{fontSize:'25px', color:'#4b1b1b'}}>
                                                        TUNA CANS
                                                        <br/>
                                                        QUANTITY NEEDED: 10
                                                    </div>

                                                    <div className="col-7">
                                                        <input className="form-check-input check-box"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn see-details-btn"
                                                                onClick={()=> this.details()}>
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-5 pantry-name" style={{fontSize:'25px', color:'#4b1b1b'}}>
                                                        TUNA CANS
                                                        <br/>
                                                        QUANTITY NEEDED: 10
                                                    </div>

                                                    <div className="col-7">
                                                        <input className="form-check-input check-box"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn see-details-btn"
                                                                onClick={()=> this.details()}>
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-5 pantry-name" style={{fontSize:'25px', color:'#4b1b1b'}}>
                                                        TUNA CANS
                                                        <br/>
                                                        QUANTITY NEEDED: 10
                                                    </div>

                                                    <div className="col-7">
                                                        <input className="form-check-input check-box"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn see-details-btn"
                                                                onClick={()=> this.details()}>
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-5 pantry-name" style={{fontSize:'25px', color:'#4b1b1b'}}>
                                                        TUNA CANS
                                                        <br/>
                                                        QUANTITY NEEDED: 10
                                                    </div>

                                                    <div className="col-7">
                                                        <input className="form-check-input check-box"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn see-details-btn"
                                                                onClick={()=> this.details()}>
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-5 pantry-name" style={{fontSize:'25px', color:'#4b1b1b'}}>
                                                        TUNA CANS
                                                        <br/>
                                                        QUANTITY NEEDED: 10
                                                    </div>

                                                    <div className="col-7">
                                                        <input className="form-check-input check-box"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn see-details-btn"
                                                                onClick={()=> this.details()}>
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-group-item volunteer-box2" style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-5 pantry-name" style={{fontSize:'25px', color:'#4b1b1b'}}>
                                                        TUNA CANS
                                                        <br/>
                                                        QUANTITY NEEDED: 10
                                                    </div>

                                                    <div className="col-7">
                                                        <input className="form-check-input check-box"
                                                               type="checkbox" value=""
                                                               id="flexCheckDefault"/>
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn see-details-btn"
                                                                onClick={()=> this.details()}>
                                                            See Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link to="/"
                                      className="btn btn-dark btn-lg go-back-to-main-menu"
                                      type="button"
                                style={{marginTop:'30px'}}>
                                    GO BACK TO MAIN
                                    <br/>
                                    MENU
                                </Link>
                                <Button type="button"
                                        className="btn btn-dark btn-lg download-pdf-list"
                                        onClick={this.download}
                                        style={{marginTop:'30px'}}>
                                    DOWNLOAD PDF WITH
                                    <br/>
                                    SELECTED ITEMS
                                </Button>

                                <div>
                                    <Modal className="modal-container"
                                           show={this.state.showDownload}
                                           onHide={this.closeDownload}
                                           animation={true}
                                           bsSize="small">
                                        <Modal.Header>
                                            LIST DOWNLOADED
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row container-fluid">
                                                <h3>100 %</h3>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                onClick={this.closeDownload}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>

                            </div>

                            <div className="col-4">
                                <h4 className={"items"}>HOW DO YOU WANT TO DELIVER YOUR ITEMS?</h4>
                                <Link to="/buyGroceryOnline"
                                      className="btn btn-dark btn-lg donate-options"
                                      type="button">
                                    BUY ONLINE
                                </Link>
                                <br/>
                                <Button type="button"
                                        className="btn btn-dark btn-lg donate-options"
                                        onClick={this.open}>
                                    DROP OFF ITEMS
                                </Button>
                                <div>
                                    <Modal className="modal-container"
                                           show={this.state.showModal}
                                           onHide={this.close}
                                           animation={true}
                                           bsSize="small">
                                        <Modal.Header>
                                            <Modal.Title>
                                                DROP ITEMS AT:
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row container-fluid">
                                                <div className="map-container">
                                                    <img src={map}
                                                         alt="Google Maps"/>
                                                </div>
                                                <b>Address: </b>
                                                123
                                                Address St., Boston MA,
                                                02130
                                                <br/>
                                                <b>Hours of
                                                    operation:</b>
                                                <br/>
                                                Mon - Thu: 10:00AM - 4:00PM
                                                <br/>
                                                Sat: 9:00AM - 12:00PM
                                                <br/>
                                                <b>Phone: (123) 456-7890</b>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button
                                                onClick={this.close}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        this.state.showDetailsModal?
                        <div id="child-input-container" style={{height:"30rem", backgroundColor: "#4b1b1b", marginTop:"-30rem", marginLeft:"4rem"}}>
                            <h3>TUNA CANS</h3>
                            <div className="review-content">
                                <div className="row">
                                    <h5  style={{marginLeft:"20rem"}}>Current Quantity:</h5>
                                    {/*<input type="number" id="quantity" name="quantity" min="1" max="100" className="form-control form-font"*/}
                                    {/*       placeholder="0"  style={{width:"5rem", fontSize:"20px", backgroundColor:"#ffffff"}} onChange={this.handleInputName} />*/}
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>20</h6>
                                </div>

                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Quantity Needed:</h5>
                                    {/*<input type="number" id="quantity" name="quantity" min="1" max="100" className="form-control form-font"*/}
                                    {/*       placeholder="8"  style={{width:"5rem", fontSize:"20px", backgroundColor:"#ffffff"}} onChange={this.handleInputName} />*/}
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>10</h6>
                                </div>
                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Additional notes:</h5>
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>The item can't be expired or opened</h6>
                                </div>
                                {/*<div className="row" style={{marginTop:"2rem"}}>*/}
                                {/*    <h5 style={{marginLeft:"20rem"}}>Product Suggestion:</h5>*/}

                                {/*    <a*/}
                                {/*        href="https://www.walmart.com/ip/Great-Value-All-Purpose-Flour-5-lb/10403017" target="_blank">*/}
                                {/*        <img style={{height:"5rem", width:"5rem", borderRadius: "50%", marginTop: "-1rem"}} src="https://i5.walmartimages.com/asr/3b38c066-8ec5-41be-8548-e5c413478d7a_4.a7ee29201ea1b52b086a97db4227b273.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="Italian Trulli"/>*/}
                                {/*    </a>*/}

                                {/*    <a*/}
                                {/*        href="https://www.walmart.com/ip/King-Arthur-Flour-Unbleached-Bread-Flour-80-oz/10535108" target="_blank">*/}
                                {/*        <img style={{height:"5rem", width:"5rem", borderRadius: "50%", marginTop: "-1rem"}} src="https://i5.walmartimages.com/asr/000e6f83-2c72-42d6-9eb6-4a8fe4bcf3cf.106481bdfd7af01e42a0e9ec7b035706.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="Italian Trulli"/>*/}
                                {/*    </a>*/}
                                {/*</div>*/}


                                <div className="row" style={{marginLeft:"20rem", marginTop:"20px", marginBottom:"30px"}}>
                                    <button
                                        type="button" className="btn btn-success button1" style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}
                                        onClick={() =>this.closeDetails()}>Close
                                    </button>
                                </div>

                            </div>


                        </div>
                                              :null}

                </div>
            </div>
        )
    }
}