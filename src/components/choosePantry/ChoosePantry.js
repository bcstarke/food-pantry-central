import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './ChoosePantry.css'

export default class ChoosePantry extends Component {

    constructor() {
        super();
        this.state = {showMessage: false}
    }

    _showTable = (bool) => {
        this.setState({
                          showMessage: bool
                      });
    };

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
                                        <button type="button"
                                                className="list-group-item list-group-item-action pantry-option">
                                            The Greater Boston Food Bank
                                        </button>
                                        <button type="button"
                                                className="list-group-item
                                        list-group-item-action pantry-option">
                                            St. Anthony Shrine / Franciscian Food Center
                                        </button>
                                        <button type="button"
                                                className="list-group-item list-group-item-action pantry-option">
                                            Salvation Army / South End Food Bank
                                        </button>
                                        <button type="button"
                                                className="list-group-item list-group-item-action pantry-option">
                                            Haley House Food Pantry
                                        </button>
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
