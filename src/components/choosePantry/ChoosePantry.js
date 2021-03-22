import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './ChoosePantry.css'

export default class ChoosePantry extends Component {

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
                                <button type="button" className="btn btn-success">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
