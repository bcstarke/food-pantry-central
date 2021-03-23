import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './ChoosePantry.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class ChoosePantry extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showMessage: false,
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    _showTable = (bool) => {
        this.setState({
                          showMessage: bool
                      });
    };

    open() {
        this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

    pantryDetails = (props) => {
        const unreadMessages = props.unreadMessages;
        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                 <h2>
                     You have {unreadMessages.length} unread messages.
                 </h2>
                }
            </div>
        );
    }

    getText = (props) => {
        const text = props;

    }

    render() {
        return (
            <div className="main-container" id="choosePantry">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <h1>Welcome to Food Pantry Central!</h1>
                        <br/>
                        <h2>Please choose a pantry</h2>
                        <div className="row user-input-row">
                            <div className="form-floating zip-input col-sm-3">
                                <input type="text" className="form-control"
                                       placeholder="Please enter your zip"/>
                            </div>
                            <div className="show-results-text col-sm-3">
                                <h5>Show results within...</h5>
                            </div>
                            <div className="radius-drop-down col-sm-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">1 Mile</option>
                                    <option value="2">2 Miles</option>
                                    <option value="5">5 Miles</option>
                                    <option value="10">10 Miles</option>
                                    <option value="25">25 Miles</option>
                                </select>
                            </div>
                            <div className="btn-search-pantry">
                                <button type="button" className="btn btn-success"
                                        onClick={this._showTable.bind(null, true)}>Search
                                </button>
                            </div>
                        </div>
                        <div className="row results-list">
                            {this.state.showMessage && (
                                <div className="col-10">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5>The Greater Boston Food Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn"
                                                                onClick={this.open}>See
                                                            Details
                                                        </Button>
                                                        <Button type="button"
                                                                className="btn btn-success details-btn">Choose</Button>
                                                        <div>
                                                            <Modal className="modal-container"
                                                                   show={this.state.showModal}
                                                                   onHide={this.close}
                                                                   animation={true}
                                                                   bsSize="small">
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Pantry
                                                                        Details</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    This pantry is located at 123
                                                                    Address St., Boston MA, 02130
                                                                    <br/>
                                                                    Hours: M-F 9-5
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button
                                                                        onClick={this.close}>Close</Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row button-row">
                                                    <div className="col-6 pantry-name">
                                                        <h5>St. Anthony Shrine / Franscician Food
                                                            Bank</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <Button type="button"
                                                                className="btn btn-primary details-btn"
                                                                onClick={this.open}>See
                                                            Details
                                                        </Button>
                                                        <Button type="button"
                                                                className="btn btn-success details-btn">Choose</Button>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item"> <div className="row button-row">
                                                <div className="col-6 pantry-name">
                                                    <h5>Salvation Army / South End Food Bank</h5>
                                                </div>
                                                <div className="col-6">
                                                    <Button type="button"
                                                            className="btn btn-primary details-btn"
                                                            onClick={this.open}>See
                                                        Details
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-success details-btn">Choose</Button>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                            </li>
                                            <li className="list-group-item"> <div className="row button-row">
                                                <div className="col-6 pantry-name">
                                                    <h5>Haley House Food Pantry</h5>
                                                </div>
                                                <div className="col-6">
                                                    <Button type="button"
                                                            className="btn btn-primary details-btn"
                                                            onClick={this.open}>See
                                                        Details
                                                    </Button>
                                                    <Button type="button"
                                                            className="btn btn-success details-btn">Choose</Button>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                            </li>
                                        </ul>

                                        {/*<button type="button"*/}
                                        {/*        className="list-group-item list-group-item-action pantry-option">*/}
                                        {/*    <div className="col-6">*/}
                                        {/*        The Greater Boston Food Bank*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-6">*/}

                                        {/*    </div>*/}
                                        {/*</button>*/}
                                        {/*<button type="button"*/}
                                        {/*        className="list-group-item*/}
                                        {/*list-group-item-action pantry-option">*/}
                                        {/*    St. Anthony Shrine / Franciscian Food Center*/}
                                        {/*</button>*/}
                                        {/*<button type="button"*/}
                                        {/*        className="list-group-item list-group-item-action pantry-option">*/}
                                        {/*    Salvation Army / South End Food Bank*/}
                                        {/*</button>*/}
                                        {/*<button type="button"*/}
                                        {/*        className="list-group-item list-group-item-action pantry-option">*/}
                                        {/*    Haley House Food Pantry*/}
                                        {/*</button>*/}
                                    </div>
                                </div>
                                // <div className="list-group">
                                //     <button type="button"
                                //             className="list-group-item list-group-item-action ">
                                //         The Greater Boston Food Bank
                                //     </button>
                                //     <button type="button"
                                //             className="list-group-item
                                // list-group-item-action">St. Anthony Shrine / Franciscian Food
                                // Center </button> <button type="button"
                                // className="list-group-item list-group-item-action">Salvation
                                // Army / South End Food Bank </button> <button type="button"
                                // className="list-group-item list-group-item-action">Haley House
                                // Food Pantry </button> </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
