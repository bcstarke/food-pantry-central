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
        };

        // this.openEditConfirmation = this.openEditConfirmation.bind(this);
        // this.closeEditConfirmation = this.closeEditConfirmation.bind(this);

        this.openDeleteConfirmation = this.openDeleteConfirmation.bind(this);
        this.closeDeleteConfirmation = this.closeDeleteConfirmation.bind(this);
    }

    // openEditConfirmation() {
    //     this.setState({showEditConfirmation: true});
    // }
    //
    // closeEditConfirmation() {
    //     this.setState({showEditConfirmation: false});
    // }

    openDeleteConfirmation() {
        this.setState({showDeleteConfirmation: true});
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
                    count = 1 + count;


                });

                const countKey = {key:count};
                Object.assign(value, key);



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
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
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
                                                                onClick={this.openDeleteConfirmation}>
                                                                {/*style={{backgroundColor:'#ff252a', color:'white'}}>*/}
                                                            Delete
                                                        </Button>
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
                                                            See Applications (4)
                                                        </Link>
                                                    </div>
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
                                    onClick={this.closeDeleteConfirmation}>Delete</Button>
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
            </div>
        )
    }
}