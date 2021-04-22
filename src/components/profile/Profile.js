import React, {Component, useEffect} from "react";
import "./Profile.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import DataJson from "./dataVolunteerApplic.json";
import $ from 'jquery';
import firebase from "../../utils/firebase";



export default class createGroceryItem extends Component {

    constructor(props) {
        super(props);
        this.back = this.back.bind(this);

        this.state={
            dataFire: [],
        }

    }

    back = () =>{
        this.props.history.goBack();

    }

    edit = () =>{
        alert('Final version will allow you to edit this field')

    }

    createItem = () =>{
        const todoRef = firebase.database().ref("groceries");
        const item ={
            name: "cheese",
            currentQuantity:4,
            needQuantity:4,
            notes: "",
            link:"",
        }
        this.setState({
            dataFire: [],
        })
        todoRef.push(item);
    }


    componentDidMount() {

        const todoRef = firebase.database().ref("groceries");
        todoRef.on('value', snapshot => {
            // convert messages list from snapshot
            const values = snapshot.val();
            const list = [];
            for(let id in values){
                list.push(values[id])

                this.setState(prevState => ({
                    dataFire: [...prevState.dataFire, values[id]]
                }))
            }
            // this.setState({
            //                   dataFire:list,
            //               })
          console.log(snapshot.val());

        });
    }



    render() {
        // const {dataFire} = this.state;


        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">

                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>Your Profile information</h1>
                        <div className="btn-wrapper" >
                        <div style={{backgroundColor:"#4b1b1b", padding:"10px", height:"20rem"}}>
                            <div className="review-content" >
                                <div className="row" style={{marginTop:"30px"}}>
                                    <h5>Food Pantry Name:</h5>
                                    <h6> Salvation Army Food Pantry</h6>
                                    {/*<button  className="btn edit-btn" size="sm" onClick={this.edit}>edit*/}

                                    {/*</button>*/}
                                </div>
                                <div className="row" style={{marginTop:"30px"}}>
                                    <h5>Address:</h5>
                                    <h6>123 Cherry st, Ma, 02139</h6>
                                    {/*<button className="btn edit-btn" size="sm"*/}
                                    {/*        onClick={this.edit}>edit*/}
                                    {/*</button>*/}
                                </div>
                                <div className="row" style={{marginTop:"30px"}}>
                                    <h5>Bank information:</h5>
                                    <h6>xxxxxxxxx</h6>
                                    {/*<button className="btn edit-btn" size="sm"*/}
                                    {/*        onClick={this.edit}>edit*/}
                                    {/*</button>button*/}

                                </div>
                            </div>

                            </div>
                            <div style={{marginTop:"10px"}}>
                                <button type="button"
                                        className="btn btn-in-profile"
                                        onClick={this.back}>Back</button>
                                <Link to="/foodPantryPortal"type="button"
                                      className="btn btn-in-profile"
                                >Go to Portal

                                </Link>

                            </div>
                            <input type="text" className="form-control form-font"   style={{backgroundColor:"#ffffff"}}/>
                            <button onClick={() =>this.createItem()}>test</button>
                        </div>
                        {this.state.dataFire.map((value, index) => (
                            <h6>{value.name}</h6>
                        ))}


                    </div>
                </div>
            </div>






        )
    }
}

