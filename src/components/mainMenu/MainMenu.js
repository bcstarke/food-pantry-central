import React, {Component} from "react";
// import Button from 'react-bootstrap/Button';
import "./MainMenu.css"
import 'bootstrap/dist/css/bootstrap.min.css'

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
                            <button className="btn btn-dark btn-lg option-select-button" type="button">Donate</button>
                                <button className="btn btn-dark btn-lg option-select-button" type="button">Volunteer</button>
                                <button className="btn btn-dark btn-lg option-select-button" type="button">Go to My Food Pantry Central</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <>
            //     <Button variant="primary" size="lg" block>
            //         Block level button
            //     </Button>
            //     <Button variant="secondary" size="lg" block>
            //         Block level button
            //     </Button>
            // </>
        )
    }
}
