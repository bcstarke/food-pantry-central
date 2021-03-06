import React, {Component} from "react";
import logo from "../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ApplicationList.css"
import firebase from "../../utils/firebase";

export default class ApplicationList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showConfirmationModal: false,
            showDetailsModal: false,
            showDeclineModal: false,
            showMessageModal: false,
            jobId: this.props.location.state.jobId,
            dataFire: [],
            links: [],
            currentItem: 0,
        };

        this.openConfirmation = this.openConfirmation.bind(this);
        this.closeConfirmation = this.closeConfirmation.bind(this);

        // this.openDetails = this.openDetails.bind(this);
        // this.closeDetails = this.closeDetails.bind(this);
        //
        // this.openDecline = this.openDecline.bind(this);
        // this.closeDecline = this.closeDecline.bind(this);

        this.showMessageModal = this.showMessageModal.bind(this);
        this.closeMessageModal = this.closeMessageModal.bind(this);
    }

    showMessageModal(){
        this.setState({showMessageModal: true})
    }
    closeMessageModal(){
        this.setState({showMessageModal: false})
    }

    openConfirmation(value) {
        const size = this.state.dataFire.length
        this.setState({
                          currentItem: size - 1 - value,
                          showConfirmationModal: true});
    }

    closeConfirmation() {
        this.setState({showConfirmationModal: false});
    }

    openDetails(){
        console.log("open")
        this.setState({showDetailsModal: true});
    }

    closeDetails(){
        this.setState({showDetailsModal: false});
    }

    openDecline(value){
        const size = this.state.dataFire.length
        this.setState({
                          currentItem:size - 1 - value,
                          showDeclineModal: true});
    }

    closeDecline(){
        this.setState({showDeclineModal: false});
    }

    deleteProduct(){


        const index = this.state.currentItem;

        this.setState({dataFire: [] });

        const item = (this.state.dataFire[index]);
        console.log("KEY" + item.key);
        firebase.database().ref("post").child(this.state.jobId).child("application").child(item.key).remove();
        this.showMessageModal();
    }

    deleteProduct2(){


        const index = this.state.currentItem;

        this.setState({dataFire: [] });

        const item = (this.state.dataFire[index]);
        console.log("KEY" + item.key);
        firebase.database().ref("post").child(this.state.jobId).child("application").child(item.key).remove();
        this.closeDecline();
    }

    handleClick(value){

        console.log(`${value} clicked`);
        const size = this.state.dataFire.length
        const item = (this.state.dataFire[value]);
        console.log(item.links);
        this.setState({
                          birth: item.birth,
                          email:item.email,
                          last:item.last,
                          name:item.name,
                          phone:item.phone,
                          qualifications:item.qualifications,
                          index: value,
                      })

        const values = item.availability;
        const list = [];

        this.setState({ links: [],})
        for(let id in values){
            list.push(values[id])

            this.setState(prevState => ({
                links: [...prevState.links, values[id]]
            }))
        }

        this.openDetails();

    }

    componentDidMount() {
        this.setState({
                          dataFire: [],
                      })
        const todoRef = firebase.database().ref("post").child(this.state.jobId).child("application");
        todoRef.on('value', snapshot => {
            // convert messages list from snapshot
            // const values = snapshot.val();
            //
            // const list = [];
            snapshot.forEach(userSnapshot => {
                console.log("key " + userSnapshot.key);
                const value = snapshot.child(userSnapshot.key).val();
                const key = {key:userSnapshot.key};
                Object.assign(value, key);
                console.log("key2" + value.key);


                //Logic for amount of applications





                this.setState(prevState => ({
                    dataFire: [...prevState.dataFire, value]
                }))
            });
        });
    }

    render() {

        const {birth} = this.state
        const {email} = this.state
        const {last}= this.state
        const {name}= this.state
        const {phone}= this.state
        const {qualifications} = this.state

        return (
            <div className="container" id="buyGroceryOnline">
                <div className="container-fluid">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
                        <Link to="/profile" type="button"
                              className="btn btn-profile"
                              onClick={this.open}>See
                            Profile
                        </Link>
                        <br/>
                        <Link to="/goToVolunteerPosting" type="button"
                              className="btn btn-go-back">
                            Go back
                        </Link>
                        <h1>Volunteer Applicants</h1>
                        <br/>

                        <div className="container-fluid">
                            <div className="col-11">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <ul className="list-group volunteer-list">

                                        {this.state.dataFire.reverse().map((value, index) => (

                                            <li className="list-group-item volunteer-box" key={index} data-id={value.id} style={{backgroundColor:"#ffffff"}} >
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                        {value.name}
                                                    </div>

                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-dark btn-sm accept"
                                                                onClick={() => this.openConfirmation(index)}
                                                                style={{marginRight:'40px'}}>
                                                            Accept
                                                        </Button>

                                                        <Button type="button"
                                                                className="btn btn-dark btn-sm decline"
                                                                onClick={()=>this.openDecline(index)}
                                                                style={{marginRight:'40px'}}>
                                                            Decline
                                                        </Button>

                                                        <Button type="button"
                                                                className="btn btn-dark btn-sm option"
                                                                onClick={() => this.handleClick(index)}>
                                                            See Details
                                                        </Button>
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
                        this.state.showConfirmationModal?
                        <div className="modal-content popup" style={{marginTop:"-25rem"}}>
                            <div className="modal-header">
                                <h4 className="modal-title">Are you sure you want to accept the application ?</h4>
                            </div>

                            {/*<div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>*/}
                            {/*    <p>Are you sure yo want to delete this item?</p>*/}
                            {/*</div>*/}

                            <div className="modal-footer">
                                <Button  type="button"
                                         className="btn btn-dark btn-sm" onClick={() => this.deleteProduct()}>
                                    Yes, accept
                                </Button>
                                <Button  type="button"
                                         className="btn btn-dark btn-sm" onClick={() => this.closeConfirmation()} style={{float:'right'}}>
                                    No, don't accept
                                </Button>
                            </div>
                        </div>
                                             :null}

                    {
                        this.state.showMessageModal?
                        <div className="modal-content popup" style={{marginTop:"-25rem"}}>
                            {/*<div className="modal-header">*/}
                            {/*    <h4 className="modal-title">Congratulation! You accept the application. You can send message to the candidate</h4>*/}
                            {/*</div>*/}
                            <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                                {/*<p>Congratulation! You accept the application. You can send message to the candidate</p>*/}
                                <div className="row container-fluid">
                                    <label>Enter Email Address:</label>
                                    <input className='form-control' type="email" id="email" name="email" placeholder='optional'
                                           style={{marginBottom:'20px'}}/>
                                    <br/>
                                    <label>Message:</label>
                                    <textarea className='form-control' rows="4" cols="25" placeholder='optional'
                                              style={{marginBottom:'20px'}}>
                                        </textarea>
                                    <br/>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <Button type="button"
                                        className="btn btn-dark btn-sm"
                                        onClick={() => this.closeMessageModal()}
                                        onClickCapture={() =>this.closeConfirmation()}
                                        style={{marginRight:'187px'}}>
                                    Send message
                                </Button>
                                <Button
                                    type="button"
                                    className="btn btn-dark btn-sm"
                                    onClick={() => this.closeMessageModal()}
                                    onClickCapture={() => this.closeConfirmation()}>
                                    Don't need to send message
                                </Button>
                            </div>
                        </div>
                                                        :null}

                    {
                        this.state.showDeclineModal?
                        <div className="modal-content popup" style={{marginTop:"-25rem"}}>
                            <div className="modal-header">
                                <h4 className="modal-title">Are you sure you want to decline the application ?</h4>
                            </div>

                            {/*<div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>*/}
                            {/*    <p>Are you sure yo want to delete this item?</p>*/}
                            {/*</div>*/}

                            <div className="modal-footer">
                                <Button  type="button"
                                         className="btn btn-dark btn-sm" onClick={() => this.deleteProduct2()}>
                                    Yes, decline
                                </Button>
                                <Button  type="button"
                                         className="btn btn-dark btn-sm" onClick={() => this.closeDecline()} style={{float:'right'}}>
                                    No, keep it
                                </Button>
                            </div>
                        </div>
                                                        :null}

                    {
                        this.state.showDetailsModal?
                        <div className="modal-content popup" style={{marginTop:"-25rem", backgroundColor:"#4b1b1b"}}>

                            <h1>Applicants details</h1>
                            <div className="row">
                                <h5 style={{ color:"#ce9466"}}>Name:</h5>
                                <h6 style={{fontSize:"20px", marginTop:"10px"}}>{name} {last}</h6>
                            </div>
                            <div className="row">
                                <h5 style={{color:"#ce9466"}}>Phone #:</h5>
                                <h6 style={{fontSize:"20px", marginTop:"10px"}}>{phone}</h6>
                            </div>
                            <div className="row">
                                <h5 style={{color:"#ce9466"}}>Email:</h5>
                                <h6 style={{fontSize:"20px", marginTop:"10px"}}>{email}</h6>
                            </div>
                            <div className="row">
                                <h5 style={{color:"#ce9466"}}>Availability:</h5>
                                {this.state.links.map((value, index) => (
                                    <h6 style={{fontSize:"20px", marginTop:"10px"}}>{value}</h6>
                                ))}
                            </div>











                            {/*<div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>*/}
                            {/*    <p>Are you sure yo want to delete this item?</p>*/}
                            {/*</div>*/}

                            <div className="modal-footer">
                                <Button  type="button"
                                         className="btn btn-dark btn-sm" onClick={() => this.closeDetails()}>
                                    close
                                </Button>
                            </div>
                        </div>
                                                        :null}
                </div>
            </div>
        )
    }
}