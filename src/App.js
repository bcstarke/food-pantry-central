import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from "./components/mainMenu/MainMenu";
import ChoosePantry from "./components/choosePantry/ChoosePantry";
import CreateGroceryItem from "./components/createGroceryItem/CreateGroceryItem";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

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
                    <Route exact path="/hello" component={ChoosePantry}/>
                    <Route exact path="/createItem" component={CreateGroceryItem}/>
                </div>
            </Router>
        );
    }
}

export default App;
