import React, {Component} from "react";
import "./CreateGroceryItem.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";


export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);
        this.state={
            showModal:false,
            showName:true,
            showQuantity:false,
            showCheckname:false,
            showCheckQuantity:false,
            productName:"",
            backgroundPointName:"red"

        }
    }
    hideName() {
       this.setState({
           showName:false,
                         showQuantity:true,
                         backgroundPointName:"white",
                         showCheckname:true,
                     })
    }


    openModal() {
        this.setState({
                          showModal:true,
                      })
    }

    closeModal() {
        this.setState({
                          showModal:false,
                      })
    }

    hideQuantity() {
        this.setState({
                          showName:false,
                          showQuantity:true,
                          backgroundPointName:"white",
                          showCheckname:true,
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

    render() {
        const {productName} = this.state
        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>Add new Item to grocery list</h1>

                        <div id="input-container">

                            {
                                this.state.showName?
                                <div id="child-input-container">
                                    <h2>Please enter the name of the product you wish to add:</h2>
                                    <form>
                                        <input type="text" className="form-control form-font"
                                               placeholder="Product Name here" name="productName" onChange={this.handleInputName}/>
                                    </form>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1">
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
                                    <h2>Please enter the quatity:</h2>
                                    <input type="text" className="form-control form-font"
                                           placeholder="Product quatity here"/>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1">
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1">
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideName()}>next
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

                                            <div className="point"></div>
                                            {
                                                this.state.showCheckQuantity?
                                                <div className="check-mark"></div>
                                                                        :null}
                                            Quantity
                                        </li>
                                        <li>

                                            <div className="point"></div>
                                            Additional Notes
                                        </li>
                                        <li>

                                            <div className="point"></div>
                                            Review
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        {/*    Pop up html*/}
                        </div>
                        {
                            this.state.showModal?
                        <div className="modal-content">
                            <div className="modal-header">

                                <h1 className="modal-title">Are you sure you want to go back to Food Pantry Portal?</h1>
                            </div>
                            <div className="modal-body">
                                <p>Everything you filled out so far in this for will be lost</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default"
                                        onClick={() =>this.closeModal()}>No, cancel action
                                </button>
                                <button type="button" className="btn btn-default"
                                        onClick={() =>this.closeModal()}>Yes, take me to portal
                                </button>
                            </div>
                        </div>
                            :null}

                    </div>
                </div>
            </div>






        )
    }
}

