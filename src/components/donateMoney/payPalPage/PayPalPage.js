import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../../images/food-pantry-logo.jpg";
import {Link} from "react-router-dom";
import '@fortawesome/react-fontawesome'
import './PayPalPage.css'
import paypal from "../../images/paypal-transparent.png"

export default class PayPalPage extends Component {
    state = {
        amount: 0
    };

    handleInput = event => {
        this.setState({amount: event.target.value});
    };

    render() {
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                    </div>
                    <div className="row username-row">
                        <div className="paypal-img-row">
                            <img src={paypal} alt={"PayPal Logo"} width="330rem"/>
                        </div>
                    </div>
                    <div className="container paypal-info">
                        <div className="row">
                            <div className="col-12">
                                <form>
                                    <div className="col-auto">
                                        <label className="amount-label"><h5>Amount</h5>
                                        </label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    $
                                                </div>
                                            </div>
                                            <input type="text" className="form-control"
                                                   id="inlineFormInputGroup"
                                                   placeholder="Enter amount..."
                                                   onChange={this.handleInput}/>
                                        </div>
                                    </div>
                                    {/*<br/>*/}
                                    <div className="row">
                                        <div className="col-6">
                                            <div>
                                                <b>Amount: </b>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div>
                                               {this.state.amount}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <br/>
                        {/*<div className="row">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <div>*/}
                        {/*            {this.state.amount}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    {/*<div className="row col-12">*/}

                    {/*<div className="img-row">*/}
                    {/*    <img src={barcode} alt={"Bar Code"} width="380rem"/>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}
