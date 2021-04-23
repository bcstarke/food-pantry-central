import React, {Component} from "react";
import logo from "../images/food-pantry-logo-b.png";
import {Link} from "react-router-dom";
import "./AcceptApplication.css";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import firebase from "../../utils/firebase";

export default class BuyGroceryOnline extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // showEditConfirmation: false,
            showDeleteConfirmation: false,
            dataFire: [],
            currentItem: 0,
        };

        // this.openEditConfirmation = this.openEditConfirmation.bind(this);
        // this.closeEditConfirmation = this.closeEditConfirmation.bind(this);


        this.closeDeleteConfirmation = this.closeDeleteConfirmation.bind(this);
    }

    // openEditConfirmation() {
    //     this.setState({showEditConfirmation: true});
    // }
    //
    // closeEditConfirmation() {
    //     this.setState({showEditConfirmation: false});
    // }

    closeDelete2() {
        console.log("helloooooo");
        this.setState({
                          showDeleteConfirmation:false,

                      })
        this.deleteProduct()
    }

    deleteProduct(){

        // let values = [...this.state.dataFire];
        const index = this.state.currentItem;
        // values.splice(index,1);
        this.setState({dataFire: [] });

        const item = (this.state.dataFire[index]);
        firebase.database().ref("post").child(item.key).remove();

    }

    openDeleteConfirmation(index) {
        const size = this.state.dataFire.length;
        this.setState({showDeleteConfirmation: true,
                          currentItem:size - 1 - index,});
    }

    closeDeleteConfirmation() {
        this.setState({showDeleteConfirmation: false});
    }

    componentDidMount() {
        this.setState({
                          dataFire: [],
                      })
        const todoRef = firebase.database().ref("post");
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

                let count = 0;
                const todoApp = firebase.database().ref("post").child(userSnapshot.key).child("application");
                todoApp.on('value', snapshot1 => {
                    snapshot1.forEach(userSnapshot => {
                    count = 1 + count;
                    });

                });

                const countKey = {count:count};
                Object.assign(value, countKey);



                this.setState(prevState => ({
                    dataFire: [...prevState.dataFire, value]
                }))

            });
        });
    }

    render() {
        return (
            <div className="container" id="buyGroceryOnline">
                <div className="container-fluid">
                    <div className="header-box container">

                            <img src={logo} alt={"Logo"} width="800px"/>

                        <Link to="/foodPantryPortal" type="button"
                              className="btn btn-go-back">
                            Go back
                        </Link>
                        <Link to="/profile" type="button"
                              className="btn btn-profile"
                              onClick={this.open}>See
                            Profile
                        </Link>
                        <br/>
                        <h1>Volunteer Posting</h1>
                        <br/>
                        <div className="container-fluid">
                            <div className="col-11 volunteer-list">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <ul className="list-group">
                                        {this.state.dataFire.reverse().map((value, index) => (

                                            <li className="list-group-item volunteer-box" key={index} data-id={value.id} style={{backgroundColor:"#ffffff"}} >
                                                <div className="row button-row">
                                                    <div className="col-4 pantry-name" style={{fontSize:'2rem', color:"#4b1b1b", fontWeight:'bold'}}>
                                                        {value.tittle}
                                                    </div>

                                                    <div className="col-8">
                                                        <Button type="button"
                                                                className="btn btn-dark btn-sm delete"
                                                                onClick={() =>this.openDeleteConfirmation(index)}>
                                                                {/*style={{backgroundColor:'#ff252a', color:'white'}}>*/}
                                                            Delete
                                                        </Button>
                                                        {
                                                            value.count > 0?
                                                        <Link
                                                              to=
                                                                  {{
                                                                      pathname: "/applicationDetails",
                                                                      state: {
                                                                          jobId: value.key,
                                                                      }
                                                                  }}
                                                              className="btn btn-dark btn-sm option"
                                                              type="button">
                                                            See Applications
                                                        </Link>
                                                                           :null}
                                                    </div>
                                                </div>
                                                    <div className="row" style={{marginLeft:"5rem"}}>
                                                        <a>Number of applicants: {value.count} {value.currentUnit}</a>
                                                    </div>
                                            </li>
                                        ))}
                                    </ul>
                    <div>
                        <Modal className="modal-container"
                               show={this.state.showDeleteConfirmation}
                               onHide={this.closeDeleteConfirmation}
                               animation={true}
                               bsSize="small">
                            <Modal.Body>
                                <div className="row container-fluid">
                                    <div className="map-container">
                                        <b>
                                            Delete this application?
                                        </b>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    onClick={() =>this.closeDelete2()}>Delete</Button>
                                <Button
                                    onClick={this.closeDeleteConfirmation}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link type="button"
                      className="btn btn-dark btn-lg download-pdf-list"
                      to="/createPost"
                      style={{marginTop:'30px'}}>
                    Create new volunteer post
                </Link>
            </div>
        )
    }
}