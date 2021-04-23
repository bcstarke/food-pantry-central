import React, {Component} from "react";
import "./SignIn.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";

export default class MainMenu extends Component {


    constructor(props) {
        super(props);
        this.state={



        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputName = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
                          [event.target.name]: event.target.value
                      })
    }


    signIn = () =>{
      if(this.state.email != "arturo@gmail.com"){
          alert(this.state.email + " account doesn't exist. Create an account or enter another email");
          return;
      }

        if(this.state.password != "123456"){
            alert(this.state.email + " password is not correct. Please try again.");
            return;
        }

        this.props.history.push('/foodPantryPortal');


    }








    render() {

        const {email} = this.state
        const {password} = this.state

        return (
            <div className="main-container" id="home">
                <div className="container" id="mainMenuBox">
                    <div className="header-box container">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <div className="sign-in-container container">
                            <form>
                                <h3>Sign In</h3>
                                <div className="form-group">
                                    <label className="label-text">Email address</label>
                                    <input type="email" className="form-control"
                                           placeholder="Enter email" name="email" onChange={this.handleInputName}/>
                                </div>

                                <div className="form-group">
                                    <label className="label-text">Password</label>
                                    <input type="password" className="form-control"
                                           placeholder="Enter password" name="password" onChange={this.handleInputName}/>
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               id="customCheck1"/>
                                        <label className="custom-control-label"
                                               htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>

                                <button type="button" to="/foodPantryPortal" onClick={() =>this.signIn()} className="btn btn-success btn-block">Sign In
                                </button>
                                <br/><br/><br/>
                                {/*<div className="sign-up-text text-right">Don't have an account? Sign up here:</div>*/}
                                <div className="sign-up-text text-center">
                                    Don't have an account? <Link className="btn btn-primary sign-up-btn"
                                                                   type="button"
                                                                   to="/signUp">Click here to Sign up</Link>
                                </div>
                                <br/><br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
