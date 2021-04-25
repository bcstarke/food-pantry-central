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
import firebase from "../../utils/firebase";
import ReactTooltip from "react-tooltip";


export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);
        this.state= {
            productName:"",
            productQuantity:0,
            productNeeded:0,
            productLink: "",
            productImage: "",
            productUnit:"Select unit",
            productUnitN:"Select unit",
            productAddNotes:"Write here",
            currentItem:"",
            showDetails: false,
            showDelete: false,
            dataFire: [],
            links: [],
            index:0,
            quantity1:1,
            quantity2:1,
            saveChanges2: false,
            saveChanges1:false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    openDetails() {
        console.log("helloooooo");
        this.setState({
                          showDetails:true,

                      })
    }

    handleInputName = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({
                          quantity1: event.target.value,
                          saveChanges1:true,
                      })
        console.log("Test= " + this.state.quantity1);

    }

    handleInputName2 = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({
                          quantity2: event.target.value,
                          saveChanges2:true,
                      })
        console.log("Test= " + this.state.quantity2);

    }

    closeDetails() {
        console.log("helloooooo");
        this.setState({
                          showDetails:false,

                      })
        this.removeClick();
    }

    openDelete(value) {
        const size = this.state.dataFire.length
        this.setState({
                          currentItem:size - 1 - value,

                      })
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

    closeDelete2() {
        console.log("helloooooo");
        this.setState({
                          showDelete:false,

                      })
        this.deleteProduct()
    }

    removeClick(){
        let links = [...this.state.links];
        links.splice(0,links.length)
        this.setState({ links });
    }


    handleClick(value) {

        console.log(`${value} clicked`);
        const size = this.state.dataFire.length
        const item = (this.state.dataFire[value]);
        console.log(item.links);
        this.setState({
                          productName: item.name,
                          productQuantity:item.currentQuantity,
                          productNeeded:item.needQuantity,
                          productUnit:item.currentUnit,
                          productUnitN:item.needUnit,
                          productAddNotes:item.notes,

                          index: value,
                      })

        const values = item.links;
        const list = [];

        for(let id in values){
            list.push(values[id])
            this.setState({ links: [],})
            this.setState(prevState => ({
                links: [...prevState.links, values[id]]
            }))
        }

        this.openDetails();

    }


    edit() {
        alert("Final version item will have the functionality of being edited")
    }

    componentDidMount() {
        this.setState({
                          dataFire: [],
                      })
        const todoRef = firebase.database().ref("groceries");
        todoRef.on('value', snapshot => {
            // convert messages list from snapshot
            const values = snapshot.val();

            const list = [];

            snapshot.forEach(userSnapshot => {
                console.log("key " + userSnapshot.key);
                const value = snapshot.child(userSnapshot.key).val();
                const key = {key:userSnapshot.key};
                Object.assign(value, key);
                console.log("key2" + value.key);
                this.setState(prevState => ({
                    dataFire: [...prevState.dataFire, value]
                }))


                        });

        });
    }

    deleteProduct(){

        // let values = [...this.state.dataFire];
        const index = this.state.currentItem;
        // values.splice(index,1);
        this.setState({dataFire: [] });

        const item = (this.state.dataFire[index]);
        firebase.database().ref("groceries").child(item.key).remove();

    }

    changes1(){
        const size = this.state.dataFire.length
        const item = (this.state.dataFire[size - 1 - this.state.index]);
        console.log("test1 " + this.state.quatity1);
        firebase.database().ref("groceries").child(item.key).child("currentQuantity").set(this.state.quantity1);


    }

    changes2(){
        const size = this.state.dataFire.length
        const item = (this.state.dataFire[size - 1 - this.state.index]);
        console.log("test1 " + this.state.quatity2);
        firebase.database().ref("groceries").child(item.key).child("neededQuantity").set(this.state.quantity2);


    }


    render() {

        const {productName} = this.state
        const {productQuantity} = this.state
        const {quantity1} = this.state
        const {productUnitN} = this.state
        const {productNeeded} = this.state
        const {productUnit} = this.state
        const {productAddNotes} = this.state

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
                                            {this.state.dataFire.reverse().map((value, index) => (

                                            <li className="list-group-item volunteer-box2" key={index} data-id={value.id} style={{backgroundColor:"#ffffff"}} >
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>{value.name}</h1>
                                                    </div>

                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() => this.handleClick(index)}>See
                                                            Details
                                                        </Button>
                                                        <Button
                                                              className="btn btn-success details-btn see-details-btn"
                                                              type="button"
                                                              onClick={() =>this.openDelete(index)}
                                                              style={{backgroundColor:"#6b724e", color:"#bfa675"}}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:"-1.5rem", marginLeft:"9rem"}}>
                                                    <a>Quantity Pantry has: {value.currentQuantity} {value.currentUnit}</a>
                                                </div>
                                                <div className="row" style={{marginTop:"0", marginLeft:"9rem"}}>
                                                    <p>Quantity Pantry needs: {value.needQuantity} {value.currentUnit}</p>
                                                </div>

                                            </li>
                                                ))}
                                        </ul>
                                    </div>


                                </div>

                        </div>

                        <Link type="button"
                              className="btn btn-dark btn-lg download-pdf-list"
to="/createItem"
                              style={{marginTop:'30px'}}>
                            Add new grocery Item
                        </Link>



                    </div>

                    {
                        this.state.showDetails?
                        <div id="child-input-container" style={{height:"35rem", backgroundColor: "#4b1b1b", marginTop:"-30rem", marginLeft:"4rem"}}>
                            <h3>Product details</h3>
                            <div className="review-content">
                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Product:</h5>
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>{productName}</h6>
                                </div>

                                <div className="row">
                                    <h5  style={{marginLeft:"20rem"}}>Quantity Pantry has:</h5>
                                    <input type="number" id="quantity1" name="quantity1" min="1" max="100" className="form-control form-font"
                                           placeholder={productQuantity}  style={{width:"5rem", fontSize:"20px", backgroundColor:"#ffffff"}} onChange={this.handleInputName} />
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>{productUnit}</h6>
                                    {
                                        this.state.saveChanges1?
                                    <button

                                        type="button" className="btn btn-success button1" style={{border:"solid", height: "30px", width: "100px", fontSize: "12px", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}
                                        onClick={() =>this.changes1()}>Save changes
                                    </button>
                                                              :null}

                                </div>

                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Quantity Pantry needs:</h5>
                                    <input type="number" id="quantity2" name="quantity2" min="1" max="100" className="form-control form-font"
                                           placeholder={productNeeded} style={{width:"5rem", fontSize:"20px", backgroundColor:"#ffffff"}} onChange={this.handleInputName2} />
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>{productUnitN}</h6>
                                    {
                                        this.state.saveChanges2?
                                    <button

                                        type="button" className="btn btn-success button1" style={{border:"solid", height: "30px", width: "100px", fontSize: "12px", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}
                                        onClick={() =>this.changes2()}>Save changes
                                    </button>
                                                               :null}
                                </div>
                                <div className="row">
                                    <h5 style={{marginLeft:"20rem"}}>Additional notes:</h5>
                                <h6 style={{fontSize:"20px", marginTop:"10px"}}>{productAddNotes}</h6>
                                </div>
                                <div className="row" style={{marginTop:"2rem"}}>
                                    <ReactTooltip id="registerTip" place="top" effect="solid" class='mySepecialClass'>
                                        "Click on image to get redirected to product page"
                                    </ReactTooltip>
                                <h5 style={{marginLeft:"20rem"}}>Product Suggestion: <img data-tip data-for="registerTip" style={{height:"1.5rem", width:"1.5rem", borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmEQb5_W_d63kRpr6DKBMx8ZPFo-M8N5y1w&usqp=CAU" alt="Italian Trulli"/></h5>
                                    {this.state.links.map((value, index) => (
                                        <a href={value.link} target="_blank">
                                            <img style={{height:"5rem", width:"5rem", borderRadius: "50%"}} src={value.image} alt="Italian Trulli"/>
                                        </a>
                                    ))}
                                </div>


                                <div className="row" style={{marginLeft:"35rem", marginTop:"20px", marginBottom:"30px"}}>

                                    <button
                                        type="button" className="btn btn-success button1" style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}
                                        onClick={() =>this.closeDetails()}>Close
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
                                      onClick={() =>this.closeDelete2()}>Delete
                                </Button>
                            </div>
                        </div>
                                             :null}
                </div>


            </div>


        )
    }
}

