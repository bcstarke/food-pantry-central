import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from "./components/mainMenu/MainMenu";
import ChoosePantry from "./components/choosePantry/ChoosePantry";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import ChooseDonationType from "./components/chooseDonationType/ChooseDonationType";
import DonateMoney from "./components/donateMoney/DonateMoney";
import CreditCardPage from "./components/donateMoney/creditCardPage/CreditCardPage";
import CCReviewPage from "./components/donateMoney/creditCardPage/CCReviewPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={MainMenu}/>
                    <Route exact path="/choosePantry" component={ChoosePantry}/>
                    <Route exact path="/donationType" component={ChooseDonationType}/>
                    <Route exact path="/donateMoney" component={DonateMoney}/>
                    <Route exact path="/creditCard" component={CreditCardPage}/>
                    <Route exact path="/creditCardReview" component={CCReviewPage}/>

                </div>
            </Router>
        );
    }
}

export default App;
