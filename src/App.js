import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from "./components/mainMenu/MainMenu";
import ChoosePantry from "./components/choosePantry/ChoosePantry";
import CreateGroceryItem from "./components/createGroceryItem/CreateGroceryItem";
import DonateGrocery from "./components/donateGrocery/DonateGrocery";

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
import BuyGroceryOnline from "./components/donateGrocery/BuyGroceryOnline";

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
                    <Route exact path="/createItem" component={CreateGroceryItem}/>
                    <Route exact path="/donateGrocery" component={DonateGrocery}/>
                    <Route exact path="/buyGroceryOnline" component={BuyGroceryOnline}/>

                </div>
            </Router>
        );
    }
}

export default App;
