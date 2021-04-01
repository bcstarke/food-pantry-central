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


export default class createGroceryItem extends Component {


    constructor(props) {
        super(props);
        this.state={
            showModal:false,
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

    componentDidMount() {
        const {handle} = this.props.match.params
        const {pantryName} = this.props.location.state
    }

    render() {
        const {pantryName} = this.props.location.state

        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container header">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <Link to="/" type="button"
                              className="btn btn-profile"
                              onClick={this.open}>
                            Go back to main
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
                        <div className="volunteer-list">
                                <div className="col-10">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Truck driver</h1>
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
                                                                      pantryName: pantryName
                                                                  }
                                                              }}
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Fork Lift operator</h1>
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
                                                                          pantryName: pantryName
                                                                      }
                                                                  }}
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>

                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1  style={{color:"#4b1b1b"}}>Shelf organizer</h1>
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
                                                                          pantryName: pantryName
                                                                      }
                                                                  }}
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Food distributor</h1>
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
                                                                          pantryName: pantryName
                                                                      }
                                                                  }}
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Fork Lift operator 2</h1>
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
                                                                          pantryName: pantryName
                                                                      }
                                                                  }}
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item volunteer-box" style={{backgroundColor:"#ce9466"}}>
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h1 style={{color:"#4b1b1b"}}>Fork Lift operator 3</h1>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-success details-btn see-details-btn"
                                                                onClick={() =>this.openModal()}
                                                                >See
                                                            Details
                                                        </Button>
                                                        <Link to=
                                                                  {{
                                                                      pathname: "/applyPost",
                                                                      state: {
                                                                          pantryName: pantryName
                                                                      }
                                                                  }}
                                                              className="btn btn-success details-btn apply-btn"
                                                              type="button">
                                                            Apply
                                                        </Link>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

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

