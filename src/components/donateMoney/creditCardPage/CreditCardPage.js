import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './CreditCardPage.css'
import logo from "../../images/food-pantry-logo-b.png";
import creditCardsLong from "../../images/credit-cards-long.png"
import {Link} from "react-router-dom";
import '@fortawesome/react-fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'


export default class CreditCardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleInputName = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
                          [event.target.name]: event.target.value
                      })
    }
    render() {
        const {pantryName} = this.props.location.state
        const {ccName} = this.state
        const {ccDollarAmount} = this.state
        const {ccNumber} = this.state
        const {ccExpDate} = this.state
        const {ccSecurityCode} = this.state
        const {ccZip} = this.state
        const {ccEmail} = this.state
        return (
            <div className="main-container" id="chooseDonationType">
                <div className="container-fluid" id="choosePantryBox">
                    <div className="header-box container">
                        <Link to="/">
                            <img src={logo} alt={"Logo"} width="800px"/>
                        </Link>
                        <br/>
                        <Link to=
                              {{
                                  pathname: "/donateMoney",
                                  state: {
                                      pantryName: pantryName
                                  }
                              }}
                              type="button"
                              className="btn go-back-btn-left">
                            Go back
                        </Link>

                        <div className="volunteer-box">
                            <div className="row vol-text">Interested in volunteering?</div>
                            <div className="row">
                                <Link to="/choosePantryV" type="button"
                                      className="btn go-to-volunteer-btn">
                                    Click here
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="pantry-info-container container-fluid">
                                <img src={creditCardsLong} alt={"Credit Cards"} height="80rem"/>
                                <br/>
                            </div>
                            <br/>
                            <div className="container-fluid cc-info">
                                <div className="row">
                                    <div className="col-6">
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
                                                           value={ccDollarAmount}
                                                           name="ccDollarAmount"
                                                           onChange={this.handleInputName}/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Cardholder
                                                    Name</h5></label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter name..."
                                                           value={ccName}
                                                           name="ccName"
                                                           onChange={this.handleInputName}/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Credit Card
                                                    Number</h5></label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter Card Number..."
                                                           value={ccNumber}
                                                           name="ccNumber"
                                                           onChange={this.handleInputName}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-6">
                                        <form>
                                            <div className="row container">
                                                <div className="col-6">
                                                    <label className="amount-label">
                                                        <h5>Expiration Date</h5>
                                                    </label>
                                                    <div className="input-group mb-2">
                                                        <input type="text" className="form-control"
                                                               id="inlineFormInputGroup"
                                                               placeholder="MM/YYYY"
                                                               value={ccExpDate}
                                                               name="ccExpDate"
                                                               onChange={this.handleInputName}/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label className="amount-label">
                                                        <h5>Security Code</h5>
                                                    </label>
                                                    <div className="input-group mb-2">
                                                        <input type="text" className="form-control"
                                                               id="inlineFormInputGroup"
                                                               placeholder="XXX"
                                                               value={ccSecurityCode}
                                                               name="ccSecurityCode"
                                                               onChange={this.handleInputName}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Zip code</h5>
                                                </label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter zip code..."
                                                           value={ccZip}
                                                           name="ccZip"
                                                           onChange={this.handleInputName}/>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-auto">
                                                <label className="amount-label"><h5>Email</h5>
                                                </label>
                                                <div className="input-group mb-2">
                                                    <input type="text" className="form-control"
                                                           id="inlineFormInputGroup"
                                                           placeholder="Enter Email..."
                                                           value={ccEmail}
                                                           name="ccEmail"
                                                           onChange={this.handleInputName}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row">*/}
                        {/*<div className="button-row">*/}
                        <div className="col-12 button-row">
                            <div className="col-3">
                                <Link
                                      to={{
                                          pathname: "/creditCardReview",
                                          state: {
                                              pantryName: this.state.pantryName,
                                              ccName: this.state.ccName,
                                              ccDollarAmount: this.state.ccDollarAmount,
                                              ccNumber: this.state.ccNumber,
                                              ccExpDate: this.state.ccExpDate,
                                              ccSecurityCode: this.state.ccSecurityCode,
                                              ccZip: this.state.ccZip,
                                              ccEmail: this.state.ccEmail
                                          }
                                      }}
                                      className="btn btn-success btn-lg cc-page-button"
                                      type="button">
                                    <div className="button-text-cc-page">
                                        Review
                                        <div className="right-arrow-icon">
                                            <FontAwesomeIcon icon={faArrowRight} size='2x'/>
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        </div>
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}
