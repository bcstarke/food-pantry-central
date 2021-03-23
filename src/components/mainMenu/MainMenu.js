import React, {Component} from "react";
import "./MainMenu.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import ChoosePantry from "../choosePantry/ChoosePantry";
import {Link} from 'react-router-dom'

export default class MainMenu extends Component {

    render() {
        return (
            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container">
                        <h1>Welcome to Food Pantry Central!</h1>
                        <br/>
                        <h2>What would you like to do?</h2>
                        <div className="row button-container">
                            <div className="d-grid gap-3">
                                <Link to="/choosePantry"
                                      className="btn btn-dark btn-lg option-select-button"
                                      type="button" >
                                    Donate
                                </Link>
                                <Link to="/choosePantry"
                                      className="btn btn-dark btn-lg option-select-button"
                                      type="button" >
                                    Volunteer
                                </Link>
                                <Link to="/choosePantry"
                                      className="btn btn-dark btn-lg option-select-button"
                                      type="button" >
                                    Go to My Food Pantry Central
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
