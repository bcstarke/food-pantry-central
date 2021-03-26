import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from "./components/mainMenu/MainMenu";
import ChoosePantry from "./components/choosePantry/ChoosePantry";
import CreateGroceryItem from "./components/createGroceryItem/CreateGroceryItem";
import FoodPantryPortal from "./components/foodPantryPortal/FoodPantryPortal";
import JobPostingsVolunteer from "./components/jobPostingsListVolunteers/JobPostingListVolunteer";
import CreateJobPosting from "./components/createJobPost/CreateJobPost";
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
import ThankYouPage from "./components/donateMoney/thankYouPage/ThankYouPage";
import VenmoPage from "./components/donateMoney/venmoPage/VenmoPage";
import PayPalPage from "./components/donateMoney/payPalPage/PayPalPage";
import OtherDonationTypePage
    from "./components/donateMoney/otherDonationTypePage/OtherDonationTypePage";

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
                    <Route exact path="/thankYouPayment" component={ThankYouPage}/>
                    <Route exact path="/venmo" component={VenmoPage}/>
                    <Route exact path="/paypal" component={PayPalPage}/>
                    <Route exact path="/otherDonationType" component={OtherDonationTypePage}/>
                    <Route exact path="/createItem" component={CreateGroceryItem}/>
                    <Route exact path="/foodPantryPortal" component={FoodPantryPortal}/>
                    <Route exact path="/jobPostingsVolunteer" component={JobPostingsVolunteer}/>
                    <Route exact path="/createPost" component={CreateJobPosting}/>

                </div>
            </Router>
        );
    }
}

export default App;
