import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

import logo from "../images/food-pantry-logo-b.png";
import "./DonateGrocery.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import map from "../images/googlemap.png";
import firebase from "../../utils/firebase";

export default class DonateGrocery extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            // showDownload: false,
            showDetailsModal: false,
            productName:"",
            productQuantity:0,
            productNeeded:0,
            productUnit:"Select unit",
            productUnitN:"Select unit",
            productAddNotes:"Write here",
            dataFire: [],
            links: [],
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        //
        // this.download = this.download.bind(this);
        // this.closeDownload = this.closeDownload.bind(this)

        this.details = this.details.bind(this)
        this.closeDetails = this.closeDetails.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

    // download(){
    //     this.setState({showDownload: true});
    // }
    //
    // closeDownload(){
    //     this.setState({showDownload: false});
    // }

    details(){
        this.setState({showDetailsModal:true});
    }

    closeDetails(){
        this.setState({showDetailsModal:false});
    }

    handleClick(value) {
        const size = this.state.dataFire.length
        const item = (this.state.dataFire[size - 1 - value]);

        this.setState({
                          productName: item.name,
                          productQuantity:item.currentQuantity,
                          productNeeded:item.needQuantity,
                          productUnit:item.currentUnit,
                          productUnitN:item.needUnit,
                          productAddNotes:item.notes,
                      })

        const values = item.links;
        const list = [];

        for(let id in values){
            list.push(values[id])

            this.setState(prevState => ({
                links: [...prevState.links, values[id]]
            }))
        }

        this.details();

    }

    componentDidMount() {
        this.setState({
                          dataFire: [],
                      })
        const todoRef = firebase.database().ref("groceries");
        todoRef.on('value', snapshot => {
            const values = snapshot.val();
            const list = [];
            for(let id in values){
                list.push(values[id])

                this.setState(prevState => ({
                    dataFire: [...prevState.dataFire, values[id]]
                }))
            }
        });
    }

    render() {

        const {productName} = this.state
        const {productQuantity} = this.state
        const {productUnitN} = this.state
        const {productNeeded} = this.state
        const {productUnit} = this.state
        const {productAddNotes} = this.state

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
                                            {this.state.dataFire.reverse().map((value, index) => (
                                                <li className="list-group-item volunteer-box2" key={index} data-id={value.id} style={{backgroundColor:"#ffffff"}} >
                                                    <div className="row button-row">
                                                        <div className="col-6 pantry-name">
                                                            <h5 style={{color:"#4b1b1b"}}>{value.name}</h5>
                                                        </div>

                                                        <div className="col-6">
                                                            <input className="form-check-input check-box"
                                                                   type="checkbox" value=""
                                                                   id="flexCheckDefault"/>
                                                            <Button type="button"
                                                                    className="btn btn-primary details-btn see-details-btn"
                                                                    onClick={() => this.handleClick(index)}>
                                                                See Details
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{marginTop:"-1.5rem", marginLeft:"3rem"}}>
                                                        <p>Quantity Needed: {value.needQuantity} {value.needUnit}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/*<Link to="/"*/}
                                {/*      className="btn btn-dark btn-lg go-back-to-main-menu"*/}
                                {/*      type="button"*/}
                                {/*style={{marginTop:'30px'}}>*/}
                                {/*    GO BACK TO MAIN*/}
                                {/*    <br/>*/}
                                {/*    MENU*/}
                                {/*</Link>*/}
                                {/*<Button type="button"*/}
                                {/*        className="btn btn-dark btn-lg download-pdf-list"*/}
                                {/*        onClick={this.download}*/}
                                {/*        style={{marginTop:'30px'}}>*/}
                                {/*    DOWNLOAD PDF WITH*/}
                                {/*    <br/>*/}
                                {/*    SELECTED ITEMS*/}
                                {/*</Button>*/}

                                {/*<div>*/}
                                {/*    <Modal className="modal-container"*/}
                                {/*           show={this.state.showDownload}*/}
                                {/*           onHide={this.closeDownload}*/}
                                {/*           animation={true}*/}
                                {/*           bsSize="small">*/}
                                {/*        <Modal.Header>*/}
                                {/*            LIST DOWNLOADED*/}
                                {/*        </Modal.Header>*/}
                                {/*        <Modal.Body>*/}
                                {/*            <div className="row container-fluid">*/}
                                {/*                <h3>100 %</h3>*/}
                                {/*            </div>*/}
                                {/*        </Modal.Body>*/}
                                {/*        <Modal.Footer>*/}
                                {/*            <Button*/}
                                {/*                onClick={this.closeDownload}>Close</Button>*/}
                                {/*        </Modal.Footer>*/}
                                {/*    </Modal>*/}
                                {/*</div>*/}
                            </div>

                            <div className="col-4">
                                <h1 className={"items"}>HOW DO YOU WANT TO DELIVER YOUR ITEMS?</h1>

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
                            <h3>{productName}</h3>
                            <div className="review-content">
                                <div className="row">
                                    <h5  style={{marginLeft:"20rem"}}>Current Quantity:</h5>
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>{productQuantity} {productUnit}</h6>
                                </div>

                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Quantity Needed:</h5>
                                    {/*<input type="number" id="quantity" name="quantity" min="1" max="100" className="form-control form-font"*/}
                                    {/*       placeholder="8"  style={{width:"5rem", fontSize:"20px", backgroundColor:"#ffffff"}} onChange={this.handleInputName} />*/}
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>{productNeeded} {productUnitN}</h6>
                                </div>
                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Additional notes:</h5>
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>{productAddNotes}</h6>
                                </div>
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