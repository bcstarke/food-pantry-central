import React, {Component} from "react";
import "./JobPostingListVolunteer.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Radio, RadioGroup} from 'react-radio-group';

export default class createJobPost extends Component {

    constructor(props) {
        super(props);
        this.onValueChange1 = this.onValueChange1.bind(this);
        this.onValueChange2 = this.onValueChange2.bind(this);
        this.onValueChange3 = this.onValueChange3.bind(this);

        this.onClickAvailability1 = this.onClickAvailability1.bind(this);
        this.onClickAvailability2 = this.onClickAvailability1.bind(this);
        this.onClickAvailability3 = this.onClickAvailability1.bind(this);
        this.state={
            showModal:false,
            showModal2:false,
            appName:"Name",
            showName:true,
            showDescription:false,
            showQualifications:false,
            showSchedule:false,
            showOpen:false,
            showReview:false,

            showCheckname:false,
            showCheckDescription:false,
            showCheckQualifications:false,
            showCheckSchedule:false,
            showCheckOpen:false,
            showCheckReview:false,

            backgroundPointName:"red",
            backgroundPointDescription:"red",
            backgroundQualifications:"red",
            backgroundPointSchedule:"red",
            backgroundPointOpen:"red",
            backgroundPointReview:"red",
            showButton:true,

            showInputSchedule0:true,
            showInputSchedule1:false,
            showInputSchedule2:false,
            showInputSchedule3:false,
            schedulerCount:0,
            // option1:"Saturday 8:00 AM - 10:00 AM"

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
                          showDescription:true,
                          backgroundPointName:"white",
                          showCheckname:true,
                      })
    }

    backToName() {
        this.setState({
                          showName:true,
                          showDescription:false,

                      })
    }

    hideDescription() {
        this.setState({
                          showDescription:false,
                          showQualifications:true,
                          backgroundPointDescription:"white",
                          showCheckDescription:true,
                      })
    }

    backToDescription() {
        this.setState({
                          showDescription:true,
                          showQualifications:false,

                      })
    }



    hideQualifications() {
        this.setState({
                          showQualifications:false,
                          showSchedule:true,
                          backgroundPointQualifications:"white",
                          showCheckQualifications:true,
                      })
    }

    backToQualifications() {
        this.setState({
                          showQualifications:true,
                          showSchedule:false,

                      })
    }

    hideSchedule() {
        this.setState({
                          showSchedule:false,
                          showOpen:true,
                          backgroundPointSchedule:"white",
                          showCheckSchedule:true,
                      })
    }

    backToSchedule() {
        this.setState({
                          showSchedule:true,
                          showOpen:false,

                      })
    }

    hideOpen() {
        this.setState({
                          showOpen:false,
                          showReview:true,
                          backgroundPointOpen:"white",
                          showCheckOpen:true,
                      })
    }

   editName() {
        console.log("EDIT naME")
       this.setState({
                         showName:true,
                         showDescription:false,
                         showQualifications:false,
                         showSchedule:false,
                         showOpen:false,
                         showReview:false,

                     })
    }


    editDescription() {
        this.setState({
                          showName:false,
                          showDescription:true,
                          showQualifications:false,
                          showSchedule:false,
                          showOpen:false,
                          showReview:false,

                      })
    }

    editQualifications() {
        this.setState({
                          showName:false,
                          showDescription:false,
                          showQualifications:true,
                          showSchedule:false,
                          showOpen:false,
                          showReview:false,

                      })
    }

    editSchedule() {
        this.setState({
                          showName:false,
                          showDescription:false,
                          showQualifications:false,
                          showSchedule:true,
                          showOpen:false,
                          showReview:false,

                      })
    }

    editOpen() {
        this.setState({
                          showName:false,
                          showDescription:false,
                          showQualifications:false,
                          showSchedule:false,
                          showOpen:true,
                          showReview:false,

                      })
    }

    editReview() {
        this.setState({
                          showName:false,
                          showDescription:false,
                          showQualifications:false,
                          showSchedule:false,
                          showOpen:false,
                          showReview:true,

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





    addScheduleInput = () =>{

        if (this.state.schedulerCount === 0){
            console.log("count")
        this.setState({
                          schedulerCount: 1,
                          showInputSchedule1:true,

                      })
        }
        if (this.state.schedulerCount === 1){
            console.log("count")
            this.setState({
                              schedulerCount: 2,
                              showInputSchedule2:true,

                          })
        }
        if (this.state.schedulerCount === 2){
            console.log("count")
            this.setState({

                              showInputSchedule3:true,

                          })
        }
    }
    onValueChange1(event) {
        this.setState({
                          option1: event.target.value
                      });
    }
    onValueChange2(event) {
        this.setState({
                          option2: event.target.value
                      });
    }
    onValueChange3(event) {
        this.setState({
                          option3: event.target.value
                      });
    }

    onClickAvailability1(e) {

        if (e.target.checked && !this.state.radioButton1) {
            this.setState({
                              radioButton1: true,

                          })
        } else if (e.target.checked && this.state.radioButton1) {
            this.setState({
                              radioButton1: false,
                              option1:"",
                          })

        }
    }

    onClickAvailability2(e) {

        if (e.target.checked && !this.state.radioButton2) {
            this.setState({
                              radioButton2: true,

                          })
        } else if (e.target.checked && this.state.radioButton2) {
            this.setState({
                              radioButton2: false,
                              option2:"",
                          })

        }
    }

    onClickAvailability3(e) {

        if (e.target.checked && !this.state.radioButton3) {
            this.setState({
                              radioButton3: true,

                          })
        } else if (e.target.checked && this.state.radioButton3) {
            this.setState({
                              radioButton3: false,
                              option3:"",
                          })

        }
    }

    render() {
        const {appName} = this.state
        const {appLastName} = this.state
        const {birthName} = this.state
        const {appPhone} = this.state
        const {appEmail} = this.state
        const {pantryName} = this.props.location.state
        const {appDay} = this.state
        const {option1} = this.state
        const {option2} = this.state
        const {option3} = this.state
        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container form">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>Apply for a volunteer posting</h1>

                        <div id="input-container">

                            {
                                this.state.showName?
                                <div id="child-input-container">
                                    <h2>Please enter your Name here:</h2>
                                    <div className="row" style={{marginLeft: "6rem"}}>
                                        <div className="form-floating col-sm-5">
                                            <label style={{color:"#ce9466"}}>
                                                Name  </label>
                                            <input type="text" className="form-control form-font"
                                                   placeholder="Name" value={appName} name="appName" onChange={this.handleInputName}/>
                                        </div>
                                        <div className="form-floating col-sm-5">
                                            <label style={{color:"#ce9466"}}>
                                                Last name  </label>
                                            <input type="text" className="form-control form-font"
                                                   placeholder="Last Name" value={appLastName} name="appLastName" onChange={this.handleInputName}/>
                                        </div>
                                    </div>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Volunteer Postings
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideName()}>next
                                        </button>
                                    </div>
                                </div>
                            :null
                            }

                            {
                                this.state.showSchedule?
                                <div id="child-input-container">
                                    <h2>Please select from the available schedules here:</h2>

                                    <div style={{marginBottom:"10px", color:"#ce9466", fontSize:"40px", fontFamily:"font-family: 'Bebas Neue', cursive;"}}>
                                        <div className="radio-button-background">
                                        <label>
                                        <input type="radio"
                                               value="Tuesday 10:00 AM - 12:00 PM"
                                               name="option1"
                                               checked={this.state.radioButton1}
                                               onClick={this.onClickAvailability1}
                                               onChange={this.onValueChange1}/>
                                            Tuesday 10:00 AM - 12:00 PM
                                        </label>
                                        </div>
                                            <div className="radio-button-background">
                                        <label>
                                            <input type="radio"
                                                   value="Thursday 10:00 AM - 4:00 PM"
                                                   name="option2"
                                                   checked={this.state.radioButton2}
                                                   onClick={this.onClickAvailability2}
                                                   onChange={this.onValueChange2}/>
                                            Thursday 10:00 AM - 4:00 PM
                                        </label>
                                            </div>
                                                <div className="radio-button-background">
                                        <label>
                                            <input type="radio"
                                                   value="Saturday 8:00 AM - 10:00 AM"
                                                   name="option3"
                                                   checked={this.state.radioButton3}
                                                   onClick={this.onClickAvailability3}
                                                   onChange={this.onValueChange3}/>
                                            Saturday 8:00 AM - 10:00 AM
                                        </label>
                                                </div>
                                    </div>



                                    <div className="wrapper" style={{marginTop:"-0.5rem"}}>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.backToQualifications()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Volunteer Postings
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideSchedule()}>next
                                        </button>
                                    </div>
                                </div>
                                                   :null
                            }

                            {
                                this.state.showDescription?
                                <div id="child-input-container">
                                    <h2>Please enter your contact information here:</h2>
                                    <div>

                                        <div className="row" style={{marginLeft: "6rem"}}>
                                            <div className="form-floating col-sm-5">
                                            <label style={{color:"#ce9466"}}>
                                                Phone #  </label>
                                            <input type="text" className="form-control form-font"
                                                   placeholder="Phone #" value={appPhone} name="appPhone" onChange={this.handleInputName}/>
                                            </div>
                                                <div className="form-floating col-sm-5">
                                                   <label style={{color:"#ce9466"}}>
                                                Email  </label>
                                            <input type="text" className="form-control form-font"
                                                   placeholder="Email" value={appEmail} name="appEmail" onChange={this.handleInputName}/>
                                                </div>
                                                </div>

                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.backToName()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Volunteer Postings
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideDescription()}>next
                                        </button>
                                    </div>
                                </div>
                                                       :null
                            }

                            {
                                this.state.showQualifications?
                                <div id="child-input-container">
                                    <h2>Please enter your date of birth here:</h2>
                                    <div>

                                        <div className="form-floating">
                                            <input type="date" className="form-control form-font"
                                                   placeholder="date" name="birthName" onChange={this.handleInputName}/>
                                        </div>

                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.backToDescription()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Volunteer Postings
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideQualifications()}>next
                                        </button>
                                    </div>
                                </div>
                                                          :null
                            }
                            {
                                this.state.showOpen?
                                <div id="child-input-container">
                                    <h2>Do you fulfill the qualifcations and requirements of this volunteer position</h2>
                                    <div className="row" style={{marginBottom:"10px", color:"#ce9466", fontSize:"40px", fontFamily:"font-family: 'Bebas Neue', cursive;"}}>
                                    <label>
                                        <input type="radio"
                                               value="true"
                                               name="qualifications"
                                               style={{marginLeft:"20rem"}}/>
                                        Yes
                                    </label>
                                    <label>
                                        <input type="radio"
                                               value="true"
                                               name="qualifications"
                                               style={{marginLeft:"10rem"}}/>
                                        No
                                    </label>
                                    </div>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1"  onClick={() =>this.backToSchedule()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Volunteer Postings
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideOpen()}>next
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
                                            <h5>Applicant's Name:</h5>
                                            <h6>{appName} {appLastName}</h6>
                                            <button  className="btn edit-btn" size="sm"
                                                    onClick={() =>this.editName()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Phone Number:</h5>
                                            <h6>{appPhone}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editDescription()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Email:</h5>
                                            <h6>{appEmail}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editDescription()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Date of Birth:</h5>
                                            <h6>{birthName}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editQualifications()}>edit
                                            </button>

                                        </div>
                                        <div className="row">
                                            <h5>Schedules:</h5>
                                            <h6></h6>
                                            <h6>{option1}</h6>
                                            <h6>{option2}</h6>
                                            <h6>{option3}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editSchedule()}>edit
                                            </button>
                                        </div>


                                    </div>
                                    <div className="wrapper" style={{marginTop:"1rem"}}>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Cancel Application
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideReview()}>Apply
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
                                        <li onClick={() => this.editName()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointName}}></div>
                                            {
                                                this.state.showCheckname?
                                            <div className="check-mark"></div>
                                                :null}
                                            Applicant's Name
                                        </li>
                                        <li  onClick={() => this.editDescription()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointDescription}}></div>
                                            {
                                                this.state.showCheckDescription?
                                                <div className="check-mark"></div>
                                                                          :null}
                                            Contact info
                                        </li>
                                        <li  onClick={() => this.editQualifications()}>

                                            <div className="point" style={{backgroundColor:this.state. backgroundPointQualifications}}></div>
                                            {
                                                this.state.showCheckQualifications?
                                                <div className="check-mark"></div>
                                                                        :null}
                                            Date of birth
                                        </li>
                                        <li onClick={() => this.editSchedule()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointSchedule}}></div>
                                            {
                                                this.state.showCheckSchedule?
                                                <div className="check-mark"></div>
                                                                            :null}
                                            Schedule
                                        </li>
                                        <li onClick={() => this.editOpen()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointOpen}}></div>
                                            {
                                                this.state.showCheckOpen?
                                                <div className="check-mark"></div>
                                                                            :null}
                                            Qualifications
                                        </li>
                                        <li onClick={() => this.editReview()}>

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

                                <h4 className="modal-title">Are you sure you want to go back to volunteer posts?</h4>
                            </div>
                            <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                                <p>Everything you have filled out so far in this form is going to be lost.</p>
                            </div>
                            <div className="modal-footer">
                                <Link to={{
                                    pathname: "/jobPostingsVolunteer",
                                    state: {
                                        pantryName: pantryName,
                                    }
                                }}
                                             type="button" className="btn btn-success popup-btn"
                                             onClick={() =>this.closeModal()}>Yes, take me to volunteer post
                                </Link>

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
                            <p>You have successfully applied to this volunteer position!</p>
                        </div>
                        <div className="modal-footer">
                            <Link to={{
                                pathname: "/jobPostingsVolunteer",
                                state: {
                                    pantryName: pantryName
                                }
                            }}
                               type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeModal()}>Close and take me to volunteer posts
                                </Link>
                        </div>
                    </div>
                                         :null}
                </div>
            </div>






        )
    }
}

