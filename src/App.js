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

                </div>
            </Router>
        );
    }
}

export default App;
