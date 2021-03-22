import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from "./components/mainMenu/MainMenu";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <div className="main-menu">
                    <MainMenu/>
                </div>
            </div>
        );
    }
}

export default App;
