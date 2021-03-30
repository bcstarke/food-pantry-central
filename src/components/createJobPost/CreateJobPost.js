import React, {Component} from "react";
import "./CreateJobPost.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


export default class createJobPost extends Component {

    constructor(props) {
        super(props);
        this.state={
            showModal:false,
            showModal2:false,

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

    render() {
        const {postName} = this.state
        const {postDescription} = this.state
        const {postQualifications} = this.state
        const {postSchedule0} = this.state
        const {postSchedule1} = this.state
        const {postSchedule2} = this.state
        const {postSchedule3} = this.state
        const {postOpen} = this.state
        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container form">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <h1>Create a new volunteer posting</h1>

                        <div id="input-container">

                            {
                                this.state.showName?
                                <div id="child-input-container">
                                    <h2>Please enter the Job tittle here:</h2>
                                    <div className="form-floating col-sm-8">
                                        <input type="text" className="form-control form-font"
                                               placeholder="Job Tittle" name="postName" onChange={this.handleInputName}/>
                                    </div>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Job Postings
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
                                    <h2>Please enter the schedules here:</h2>

                                        {
                                            this.state.showInputSchedule0?
                                        <div className="row user-input-row-sche" style={{marginTop:"-50px"}}>
                                                <div className="md-form mx-2 my-5">
                                                    <label style={{color:"#ce9466"}}>
                                                        Day of the week  </label>
                                                    <select className="form-control form-font" style={{fontSize:"20px"}} value={postSchedule0}>
                                                        <option selected value="Day">Day</option>
                                                        <option value="Monday">Monday</option>
                                                        <option value="Tuesday">Tuesday</option>
                                                        <option value="Wednesday">Wednesday</option>
                                                        <option value="Thursday">Thursday</option>
                                                        <option value="Friday">Friday</option>
                                                        <option value="Saturday">Saturday</option>
                                                        <option value="Sunday">Sunday</option>
                                                    </select>

                                                </div>
                                                <div className="md-form mx-2 my-5">
                                                        <label htmlFor="inputMDEx1" style={{color:"#ce9466"}}>From
                                                            time</label>
                                                        <input type="time" id="inputMDEx1"
                                                               className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>


                                                </div>
                                                <div className="md-form mx-2 my-5">

                                                    <label htmlFor="inputMDEx1" style={{color:"#ce9466"}}>To
                                                        time</label>
                                                    <input type="time" id="inputMDEx1"
                                                           className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>

                                                </div>
                                                    <button className="btn edit-btn" size="m"
                                                            onClick={() => this.addScheduleInput()}>Add new schedule
                                                    </button>

                                        </div>
                                            :null}
                                        {
                                            this.state.showInputSchedule1?
                                        <div className="row user-input-row-sche" style={{marginTop:"-80px"}}>

                                        <div className="md-form mx-2 my-5">

                                            <select className="form-control form-font" style={{fontSize:"20px"}} value={postSchedule1}>
                                                <option selected value="Day">Day</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                                <option value="Sunday">Sunday</option>
                                            </select>

                                        </div>
                                        <div className="md-form mx-2 my-5">

                                            <input type="time" id="inputMDEx1"
                                                   className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>


                                        </div>
                                        <div className="md-form mx-2 my-5">


                                            <input type="time" id="inputMDEx1"
                                                   className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>

                                        </div>
                                        <button className="btn edit-btn" size="m" style={{border:"none", color:"transparent"}}>
                                            Add new schedule
                                        </button>

                                    </div>
                                        :null}
                                        {
                                            this.state.showInputSchedule2?
                                            <div className="row user-input-row-sche" style={{marginTop:"-80px"}}>

                                                <div className="md-form mx-2 my-5">

                                                    <select className="form-control form-font" style={{fontSize:"20px"}} value={postSchedule0}>
                                                        <option selected value="Day">Day</option>
                                                        <option value="Monday">Monday</option>
                                                        <option value="Tuesday">Tuesday</option>
                                                        <option value="Wednesday">Wednesday</option>
                                                        <option value="Thursday">Thursday</option>
                                                        <option value="Friday">Friday</option>
                                                        <option value="Saturday">Saturday</option>
                                                        <option value="Sunday">Sunday</option>
                                                    </select>

                                                </div>
                                                <div className="md-form mx-2 my-5">

                                                    <input type="time" id="inputMDEx1"
                                                           className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>


                                                </div>
                                                <div className="md-form mx-2 my-5">


                                                    <input type="time" id="inputMDEx1"
                                                           className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>

                                                </div>
                                                <button className="btn edit-btn" size="m" style={{border:"none", color:"transparent"}}>
                                                    Add new schedule
                                                </button>

                                            </div>
                                        :null}
                                        {
                                            this.state.showInputSchedule3?
                                            <div className="row user-input-row-sche" style={{marginTop:"-80px"}}>

                                                <div className="md-form mx-2 my-5">

                                                    <select className="form-control form-font" style={{fontSize:"20px"}} value={postSchedule0}>
                                                        <option selected value="Day">Day</option>
                                                        <option value="Monday">Monday</option>
                                                        <option value="Tuesday">Tuesday</option>
                                                        <option value="Wednesday">Wednesday</option>
                                                        <option value="Thursday">Thursday</option>
                                                        <option value="Friday">Friday</option>
                                                        <option value="Saturday">Saturday</option>
                                                        <option value="Sunday">Sunday</option>
                                                    </select>

                                                </div>
                                                <div className="md-form mx-2 my-5">

                                                    <input type="time" id="inputMDEx1"
                                                           className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>


                                                </div>
                                                <div className="md-form mx-2 my-5">


                                                    <input type="time" id="inputMDEx1"
                                                           className="form-control form-font" style={{color:"#4b1b1b", fontSize: "20px", border:"none"}}/>

                                                </div>
                                                <button className="btn edit-btn" size="m" style={{border:"none", color:"transparent"}}>
                                                    Add new schedule
                                                </button>

                                            </div>
                                        :null}

                                    <div className="wrapper" style={{marginTop:"-0.5rem"}}>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.backToQualifications()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Job Postings
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
                                    <h2>Please enter the volunteer job description here:</h2>
                                    <div>

                                        <div className="form-floating form-text-area">
                                            <textarea type="text" className="form-control form-font" placeholder="Volunteer description here" name="postDescription" onChange={this.handleInputDescription}/>
                                        </div>

                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.backToName()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Grocery list
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
                                    <h2>Please enter Qualifications and requirements here:</h2>
                                    <div>

                                        <div className="form-floating form-text-area">
                                            <textarea type="text" className="form-control form-font" placeholder="Qualifications and requirements here" name="postQualifications" onChange={this.handleInputName}/>
                                        </div>

                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.backToDescription()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Grocery list
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
                                    <h2>Please enter number of open positions:</h2>
                                    <div className="form-floating col-sm-8">
                                        <input type="number" id="quantity" name="quantity" min="1" max="100" className="form-control form-font"
                                               placeholder="# here" name="postOpen" style={{width:"10rem", fontSize:"40px", marginLeft:"20rem"}} onChange={this.handleInputName}/>
                                    </div>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1"  onClick={() =>this.backToSchedule()}>
                                            Back
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()}>
                                            Take me to my Job Postings
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
                                            <h5>Volunteer position tittle:</h5>
                                            <h6>{postName}</h6>
                                            <button  className="btn edit-btn" size="sm"
                                                    onClick={() =>this.editName()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Position Description:</h5>
                                            <h6>{postDescription}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.hideDescription()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Position Qualifications and Requirements:</h5>
                                            <h6>{postQualifications}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.hideQualifications()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Schedules:</h5>
                                            <h6>Monday: 10:00 - 11:00</h6>
                                            <h6>Tuesday: 12:00 - 15:00</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.hideSchedule()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Open positions:</h5>
                                            <h6>{postOpen}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editOpen()}>edit
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
                                        <li onClick={() => this.editName()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointName}}></div>
                                            {
                                                this.state.showCheckname?
                                            <div className="check-mark"></div>
                                                :null}
                                            Job Tittle
                                        </li>
                                        <li  onClick={() => this.editDescription()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointDescription}}></div>
                                            {
                                                this.state.showCheckDescription?
                                                <div className="check-mark"></div>
                                                                          :null}
                                            Description
                                        </li>
                                        <li  onClick={() => this.editQualifications()}>

                                            <div className="point" style={{backgroundColor:this.state. backgroundPointQualifications}}></div>
                                            {
                                                this.state.showCheckQualifications?
                                                <div className="check-mark"></div>
                                                                        :null}
                                            Qualifications
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
                                            Open positions
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

                                <h4 className="modal-title">Are you sure you want to go back to the food pantry portal?</h4>
                            </div>
                            <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                                <p>Everything you have filled out so far in this for is going to be lost.</p>
                            </div>
                            <div className="modal-footer">
                                <Link to="/foodPantryPortal" type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeModal()}>Yes, take me to portal
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
                            <p>You have succesfully added  new item!</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/foodPantryPortal"
                               type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeModal()}>Close and take me to portal
                                </Link>
                        </div>
                    </div>
                                         :null}
                </div>
            </div>






        )
    }
}

