import React, {Component} from "react";
import "./CreateGroceryItem.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'


export default class createGroceryItem extends Component {

    render() {
        return (
            <div className="main-container" id="home">
                <div id="header">
                    <h1>Add new item to Grocery List</h1>
                </div>
                <div id="input-container">
                        <div id="child-input-container">
                            <h1>Please enter the name of the product you wish to add:</h1>
                        </div>
                </div>
                <div id="index">

                    <div id="child-index">
                        <h1>Index</h1>
                        <div className="timeline">
                            <ul>
                                <li>

                                    <div className="point"></div>
                                    Product Name
                                </li>
                                <li>

                                    <div className="point"></div>
                                    Quantity
                                </li>
                                <li>

                                    <div className="point"></div>
                                    Additional Notes
                                </li>
                                <li>

                                    <div className="point"></div>
                                    Review
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

