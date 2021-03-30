import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from "./components/mainMenu/MainMenu";
import ChoosePantry from "./components/choosePantry/ChoosePantry";
import ChoosePantryV from "./components/choosePantryVolunteer/ChoosePantryVolunteer";
import CreateGroceryItem from "./components/createGroceryItem/CreateGroceryItem";
import DonateGrocery from "./components/donateGrocery/DonateGrocery";
import EmployeePortal from "./components/mainMenu/EmployeePortal";
import AcceptApplication from "./components/acceptApplication/AcceptApplication";
import ApplicationList from "./components/acceptApplication/ApplicationList";
import FoodPantryPortal from "./components/foodPantryPortal/FoodPantryPortal";
import JobPostingsVolunteer from "./components/jobPostingsListVolunteers/JobPostingListVolunteer";
import CreateJobPosting from "./components/createJobPost/CreateJobPost";
import Profile from "./components/profile/Profile";
import GroceryList from "./components/groceryList/GroceryList";
import ApplyPost from "./components/jobPostingsListVolunteers/ApplyForPost"

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
                    <Route exact path="/donateGrocery" component={DonateGrocery}/>
                    <Route exact path="/buyGroceryOnline" component={BuyGroceryOnline}/>
                    <Route exact path="/employeePortal" component={EmployeePortal}/>
                    <Route exact path="/goToVolunteerPosting" component={AcceptApplication}/>
                    <Route exact path="/applicationDetails" component={ApplicationList}/>
                    <Route exact path="/foodPantryPortal" component={FoodPantryPortal}/>
                    <Route exact path="/jobPostingsVolunteer" component={JobPostingsVolunteer}/>
                    <Route exact path="/createPost" component={CreateJobPosting}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/groceryList" component={GroceryList}/>
                    <Route exact path="/applyPost" component={ApplyPost}/>
                    <Route exact path="/choosePantryV" component={ChoosePantryV}/>



                </div>
            </Router>
        );
    }
}

export default App;
