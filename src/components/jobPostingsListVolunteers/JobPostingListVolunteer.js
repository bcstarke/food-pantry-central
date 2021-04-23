import React, {Component} from "react";
import "./JobPostingListVolunteer.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import map from "../images/googlemap.png";
import firebase from "../../utils/firebase";


export default class createGroceryItem extends Component {


    constructor(props) {
        super(props);
        this.state={
            showModal:false,
            dataFire: [],
        }


    }

    openModal() {
        console.log("helloooooo");
        this.setState({
                          showModal:true,

                      })
    }

    closeModal() {
        this.setState({
                          showModal:false,
                          showButton:true
                      })
    }

    back = () =>{
        this.props.history.goBack();

    }

    componentDidMount() {
        this.setState({
                          dataFire: [],
                      })
        const todoRef = firebase.database().ref("post");
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

    render() {
        const {pantryName} = this.props.location.state

        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <p className="go-donate-tittle">Want to donate instead?</p>

                        <Link to="/donationType" type="button"
                              className="btn btn-go-donate"
                             >
                            Click here
                        </Link>
                        <Link to="/" type="button"
                              className="btn btn-go-back"
                              onClick={this.back}>
                            Go back
                        </Link>
                        <h1>VOLUNTEER POSTINGS</h1>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <h6 style={{fontSize:"30px"}}>Pantry you chose: {pantryName}</h6>
                                <div className="change-pantry-container">
                                    <Link to="/choosePantryV"
                                          className="btn btn-info button1"
                                          type="button"
                                    style={{fontSize:"20px"}}>
                                        Change Food Pantry
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer-list" style={{marginLeft:"6rem"}}>
                                <div className="col-10">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">

                                            {this.state.dataFire.reverse().map((value, index) => (
                                            <li className="list-group-item volunteer-box2" key={index} data-id={value.id} style={{backgroundColor:"#ffffff"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>{value.tittle}</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.openModal()}>See
                                                            Details
                                                        </Button>
                                                        <Link to=
                                                              {{
                                                                  pathname: "/applyPost",
                                                                  state: {
                                                                      pantryName: pantryName,
                                                                      jobId: value.key,
                                                                      qualifications: value.qualifications,
                                                                  }
                                                              }}
                                                              className="btn btn-success details-btn see-details-btn"
                                                              type="button"
                                                              style={{backgroundColor:"#6b724e", color:"#bfa675"}}
                                                        >
                                                            Apply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>






                                </div>
                        </div>





                    </div>

                    {
                        this.state.showModal?
                                     <div id="child-input-container" style={{height:"30rem", backgroundColor: "#4b1b1b", marginTop:"-30rem", marginLeft:"4rem"}}>
                                         <h3>Truck driver</h3>
                                         <div className="review-content">

                                                 <h5>Position Description:</h5>
                                                 <h6 style={{fontSize:"20px"}}>Pickup and drop grocery boxes from the food distribution stores to the food pantry. The volunteer will be loading and unloading heavy boxes.</h6>



                                                 <h5>Position Qualifications and Requirements:</h5>
                                                 <h6 style={{fontSize:"20px"}}>Must have an unexpired truck driver's licence and are able to carry more than 10kg of boxes</h6>

                                                 <h5>Schedules:</h5>
                                                 <h6 style={{fontSize:"20px"}}>Monday: 10:00 - 11:00</h6>
                                                 <h6 style={{fontSize:"20px"}}>Tuesday: 12:00 - 15:00</h6>



                                                 <button

                                                       type="button" className="btn btn-success popup-btn" style={{backgroundColor:"#b88043"}}
                                                       onClick={() =>this.closeModal()}>Close
                                                 </button>

                                         </div>


                                     </div>
                                                     :null
                            }


                </div>
            </div>






        )
    }
}

