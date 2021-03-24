import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CreditCardPage.css'
import logo from "../../images/food-pantry-logo.jpg";

export default class CCReviewPage extends Component {

    render() {
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}
