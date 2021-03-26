import React, {Component} from "react";
import "./CreateGroceryItem.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);
        this.state={
            showModal:false,
            showModal2:false,
            showName:true,
            showQuantity:false,
            showAddNotes:false,
            showReview:false,
            showCheckname:false,
            showCheckQuantity:false,
            showCheckAddNotes:false,
            showCheckReview:false,
            productName:" Eggs",
            productQuantity:0,
            productUnit:"Select unit",
            productAddNotes:"It can't be broken or expired",
            backgroundPointName:"red",
            backgroundPointQuantity:"red",
            backgroundPointAddNotes:"red",
            backgroundPointReview:"red",
            showButton:true,

        }
    }

    openModal() {
        console.log("helloooooo");
        this.setState({
                          showModal:true,
                          showButton:false

                      })
    }

    closeModal() {
        this.setState({
                          showModal:false,
                          showButton:true
                      })
    }

    hideName() {
        this.setState({
                          showName:false,
                          showQuantity:true,
                          backgroundPointName:"white",
                          showCheckname:true,
                      })
    }
    BackToName() {
        this.setState({
                          showName:true,
                          showQuantity:false,

                      })
    }

    hideQuantity() {
        this.setState({
                          showQuantity:false,
                          showAddNotes:true,
                          backgroundPointQuantity:"white",
                          showCheckQuantity:true,
                      })
    }



    hideAddNotes() {
        this.setState({
                          showAddNotes:false,
                          showReview:true,
                          backgroundPointAddNotes:"white",
                          showCheckAddNotes:true,
                      })
    }

    hideReview() {
        this.setState({
                          showReview:false,
                          showModal2:true,
                          backgroundPointReview:"white",
                          showCheckReview:true,
                      })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

    handleInputName = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
                      })
    }

    handleInputQuantity = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
                          [event.target.name]: event.target.value
                      })
    }

    render() {
        const {productName} = this.state
        const {productQuantity} = this.state
        const {productUnit} = this.state
        const {productAddNotes} = this.state
        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container form">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>Add new Item to grocery list</h1>

                        <div id="input-container">

                            {
                                this.state.showName?
                                <div id="child-input-container">
                                    <h2>Please enter the name of the product you wish to add:</h2>
                                    <div className="form-floating col-sm-8">
                                        <input type="text" className="form-control form-font"
                                               placeholder="Product Name here" name="productName" onChange={this.handleInputName}/>
                                    </div>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideName()}>next
                                        </button>
                                    </div>
                                </div>
                            :null
                            }

                            {
                                this.state.showQuantity?
                                <div id="child-input-container">
                                    <h2>Please enter the name of the product you wish to add:</h2>
                                    <div>
                                        <div className="row user-input-row form-div">
                                            <div className="form-floating col-sm-3">
                                                <input type="text" className="form-control form-font" placeholder="Product quantity here" name="productQuantity" onChange={this.handleInputQuantity}/>
                                            </div>
                                            <div className="col-sm-1.2">
                                                <select className="form-control form-font" value={productUnit}>
                                                    <option selected value="Unit(s)">Unit(s)</option>
                                                    <option value="Box(es)">Box(es)</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="Liter">Liter</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.BackToName()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideQuantity()}>next
                                        </button>
                                    </div>
                                </div>
                                                   :null
                            }

                            {
                                this.state.showAddNotes?
                                <div id="child-input-container">
                                    <h2>Please enter any additional comments:</h2>
                                    <div>

                                            <div className="form-floating form-text-area">
                                                <textarea type="text" className="form-control form-font" placeholder="Product quantity here" name="productAddNotes" onChange={this.handleInputQuantity}/>
                                            </div>

                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" >
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideAddNotes()}>next
                                        </button>
                                    </div>
                                </div>
                                                       :null
                            }

                            {
                                this.state.showReview?
                                <div id="child-input-container" style={{height:"30rem"}}>
                                    <h3>Review form</h3>
                                    <div className="review-content">
                                        <div className="row">
                                            <h5>Product Name:</h5>
                                            <h6>{productName}</h6>
                                            <button  className="btn edit-btn" size="sm"
                                                    onClick={() =>this.hideName()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Product Quantity:</h5>
                                            <h6>{productQuantity} {productUnit}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.hideName()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Additional comments:</h5>
                                            <h6>{productAddNotes}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.hideName()}>edit
                                            </button>

                                        </div>

                                    </div>
                                    <div className="wrapper" style={{marginTop:"1rem"}}>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Cancel Item
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideReview()}>Add item
                                        </button>
                                    </div>
                                </div>
                                                       :null
                            }

                        </div>
                        <div id="index">

                            <div id="child-index">
                                <h3>Index</h3>
                                <div className="timeline">
                                    <ul>
                                        <li>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointName}}></div>
                                            {
                                                this.state.showCheckname?
                                            <div className="check-mark"></div>
                                                :null}
                                            Product Name
                                        </li>
                                        <li>

                                            <div className="point" style={{backgroundColor:this.state. backgroundPointQuantity}}></div>
                                            {
                                                this.state.showCheckQuantity?
                                                <div className="check-mark"></div>
                                                                        :null}
                                            Quantity
                                        </li>
                                        <li>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointAddNotes}}></div>
                                            {
                                                this.state.showCheckAddNotes?
                                                <div className="check-mark"></div>
                                                                            :null}
                                            Additional Notes
                                        </li>
                                        <li>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointReview}}></div>
                                            {
                                                this.state.showCheckReview?
                                                <div className="check-mark"></div>
                                                                            :null}
                                            Review
                                        </li>
                                    </ul>
                                </div>
                            </div>




                    </div>
                        {/*    Pop up Congrats html*/}
                    </div>
                    {
                        this.state.showModal?
                        <div className="modal-content popup">
                            <div className="modal-header">

                                <h4 className="modal-title">Are you sure you want to go back to the food pantry portal?</h4>
                            </div>
                            <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                                <p>Everything you have filled out so far in this for is going to be lost.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeModal()}>Yes, take me to portal
                                </button>
                                <button type="button" className="btn btn-success popup-btn1"
                                        onClick={() =>this.closeModal()}>No, cancel action
                                </button>
                            </div>
                        </div>
                                            :null}



                {
                    this.state.showModal2?
                    <div className="modal-content popup">
                        <div className="modal-header">

                            <h4 className="modal-title">Congratulations!</h4>
                        </div>
                        <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                            <p>You have succesfully added  new item!</p>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-success popup-btn"
                                    onClick={() =>this.closeModal()}>Close and take me to portal
                            </button>
                        </div>
                    </div>
                                         :null}
                </div>
            </div>






        )
    }
}

