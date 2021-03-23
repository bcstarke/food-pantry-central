import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './ChooseDonationType.css'

export default class ChooseDonationType extends Component {

    render() {
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <h1>Welcome to Food Pantry Central!</h1>
                        <br/>
                        <div className="row">
                            <div className="pantry-info-container">
                                <h2>Pantry you chose: XXX</h2>
                                <div className="change-pantry-container">
                                    <Link to="/choosePantry"
                                          className="btn btn-info change-pantry-btn"
                                          type="button">
                                        Change Food Pantry
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
