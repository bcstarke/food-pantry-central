import React, {Component} from "react";
import "./CreateGroceryItem.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from "../images/food-pantry-logo-b.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import ReactTooltip from 'react-tooltip';
import firebase from "../../utils/firebase";


export default class createGroceryItem extends Component {
    formIsValid;

    constructor(props) {
        super(props);
        this.state={
            showModal:false,
            showModal2:false,
            showModal3:false,
            showName:true,
            showQuantity:false,
            showAddNotes:false,
            showLink:false,
            showReview:false,
            showCheckname:false,
            showCheckQuantity:false,
            showCheckAddNotes:false,
            showCheckReview:false,
            showCheckLink:false,
            productName:"",
            productQuantity:0,
            productNeeded:0,
            productLink: "",
            productImage: "",
            productUnit:"Select unit",
            productUnitN:"Select unit",
            productAddNotes:"Write here",
            backgroundPointName:"red",
            backgroundPointQuantity:"red",
            backgroundPointAddNotes:"red",
            backgroundPointReview:"red",
            backgroundPointLink:"red",
            showButton:true,
            nameError: "",
            dataFire: [],
            values: [],
        }
    }

    openModal() {
        console.log("helloooooo");
        this.setState({
                          showModal:true,
                          showButton:false
                      })
    }

    closeModal() {
        this.setState({
                          showModal:false,
                          showButton:true
                      })
    }

    openModal3() {
        console.log("helloooooo");
        this.setState({
                          showModal3:true,
                          showButton:false

                      })
    }

    closeModal3() {
        this.setState({
                          showModal3:false,
                          showButton:true
                      })
    }

    hideName() {
        let nameError = "";
        if(this.state.productName === ""){
            nameError = "Please enter a valid product name";
            this.setState({ nameError});

        }
        else{
        this.setState({
                          showName:false,
                          showQuantity:true,
                          backgroundPointName:"white",
                          showCheckname:true,
                      })
        }
        this.setState({ nameError});
    }


    hideQuantity() {
        this.setState({
                          showQuantity:false,
                          showAddNotes:true,
                          backgroundPointQuantity:"white",
                          showCheckQuantity:true,
                      })
    }





    hideAddNotes() {
        this.setState({
                          showAddNotes:false,
                          showLink:true,
                          backgroundPointAddNotes:"white",
                          showCheckAddNotes:true,
                      })
    }

    hideLink() {
        this.setState({
                          showLink:false,
                          showReview:true,
                          backgroundPointLink:"white",
                          showCheckLink:true,
                      })
    }

    hideReview() {
        this.setState({
                          showReview:false,
                          showModal2:true,
                          backgroundPointReview:"white",
                          showCheckReview:true,
                      })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

    handleInputName = (event) =>{
        event.preventDefault();

        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
                      })

        let nameError = "";
        if(this.state.productName != ""){
            nameError = "";
            this.setState({ nameError});

        }

    }

    handleInputQuantity = (event) =>{
        event.preventDefault();
        console.log(event.target.value);


        this.setState({
                          [event.target.name]: event.target.value
                      })
    }

    editName() {
        this.setState({
                          showName:true,
                          showLink:false,
                          showQuantity:false,
                          showAddNotes:false,
                          showReview:false,

                      })
    }

    editQuantity() {
        this.setState({
                          showName:false,
                          showLink:false,
                          showQuantity:true,
                          showAddNotes:false,
                          showReview:false,

                      })
    }

    editAddNotes() {
        this.setState({
                          showName:false,
                          showLink:false,
                          showQuantity:false,
                          showAddNotes:true,
                          showReview:false,

                      })
    }

    editReview() {
        this.setState({
                          showName:false,
                          showLink:false,
                          showQuantity:false,
                          showAddNotes:false,
                          showReview:true,

                      })
    }

    editLink() {
        this.setState({

                          showName:false,
                          showLink:true,
                          showQuantity:false,
                          showAddNotes:false,
                          showReview:false,

                      })
    }


    createItem = () =>{
        const todoRef = firebase.database().ref("groceries");
        const item ={
            name: this.state.productName,
            currentQuantity: this.state.productQuantity,
            currentUnit:this.state.productUnit,
            needQuantity:this.state.productNeeded,
            needUnit:this.state.productUnitN,
            notes: this.state.productAddNotes,
        }
        this.setState({
                          dataFire: [],
                      })
        const ref  = todoRef.push(item);
        const key = ref.getKey();

        const todoRefLink = firebase.database().ref("groceries").child(key).child("links");
        this.state.values.map((value) =>
            todoRefLink.push(value)
        )
        this.hideReview();

    }

    componentDidMount() {

        const todoRef = firebase.database().ref("groceries");
        todoRef.on('value', snapshot => {
            // convert messages list from snapshot
            const values = snapshot.val();
            const list = [];
            for(let id in values){
                list.push(values[id])

                this.setState(prevState => ({
                    dataFire: [...prevState.dataFire, values[id]]
                }))
            }
            console.log(snapshot.val());

        });
    }


    createUI(){
        return this.state.values.map((el, i) =>

                                         <div key={i} className="row user-input-row-sche" style={{marginTop:"-50px"}}>
                                             <div className="row" style={{marginLeft: "6rem",marginTop: "4rem"}}>
                                                 <div className="form-floating col-sm-5">

                                                     <input type="text" className="form-control form-font" style={{backgroundColor:"#ffffff"}}
                                                            placeholder="" value={el.link} data-id={i} name="link" onChange={this.handleChange.bind(this, i)}/>
                                                 </div>

                                                 <ReactTooltip id="registerTip" place="top" effect="solid" class='mySepecialClass'>
                                                     To get the image link: Click right button over the product image online and click on "Copy image address"
                                                 </ReactTooltip>
                                                 <div className="form-floating col-sm-5" >

                                                     <input type="text" className="form-control form-font" style={{backgroundColor:"#ffffff"}}
                                                            placeholder="" value={el.image} data-id={i} name="image" onChange={this.handleChange.bind(this, i)}/>
                                                 </div>
                                                 <button className="btn edit-btn" size="m"
                                                         onClick={this.removeClick.bind(this, i)}>Remove Schedule
                                                 </button>
                                             </div>
                                         </div>
        )
    }


    handleChange(i, event) {
        let values = [...this.state.values];
        // values[i] = event.target.value;
        // this.setState({ values });
        // console.log("values " + values)
        // const values = [...fields];
        const { name, value } = event.target;
        values[i][name] = value;
        this.setState({values});

        // alert('A name was submitted: ' + this.state.values[i].day + " " + this.state.values[i].to + " " + this.state.values[i].from);

    }

    addClick(){
        this.setState(prevState => ({ values: [...prevState.values, {link: '', image:''}]}))
    }

    removeClick(i){
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }











    render() {
        const {productName} = this.state
        const {productQuantity} = this.state
        const {productUnitN} = this.state
        const {productNeeded} = this.state
        const {productUnit} = this.state
        const {productAddNotes} = this.state
        const {productLink} = this.state
        const {productImage} = this.state
        const {nameError} = this.state
        return (

            <div className="main-container" id="home">
                <div className="container-fluid" id="mainMenuBox">
                    <div className="header-box container form">
                        <img src={logo} alt={"Logo"} width="800px"/>
                        <br/>
                        <button to="/foodPantryPortal"
                              className="btn btn-go-back" style={{marginTop:"-15px"}} onClick={() =>this.openModal3()}>
                            Go to Portal
                        </button>
                        <h1>Add new Item to grocery list</h1>

                        <div id="input-container">

                            {
                                this.state.showName?
                                <div id="child-input-container">
                                    <h2>Please enter the name of the product you wish to add:</h2>

                                    <div className="form-floating col-sm-8">
                                        <input type="text" className="form-control form-font" style={{marginLeft:"10rem", backgroundColor:"#ffffff"}}
                                               placeholder="" value={productName} name="productName" onChange={this.handleInputName}/>
                                        <div style={{ fontSize: "20px", color: "red", marginLeft:"50px"}}>
                                            {this.state.nameError}
                                        </div>
                                    </div>
                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()} style={{backgroundColor:"#4b1b1b", borderColor:"#ce9466", border:"solid"}}>
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1" style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}
                                                onClick={() =>this.hideName()}>next
                                        </button>
                                    </div>
                                </div>
                            :null
                            }

                            {
                                this.state.showQuantity?
                                <div id="child-input-container" style={{height: "30rem"}}>
                                    <h2>Please enter current amount available:</h2>
                                    <div>
                                        <div className="row user-input-row form-div">
                                            <div className="form-floating col-sm-3">
                                                <input type="text" className="form-control form-font"  placeholder="Product quantity here" value={productQuantity} name="productQuantity" onChange={this.handleInputQuantity} style={{backgroundColor:"#ffffff"}}/>
                                            </div>
                                            <div className="col-sm-1.2">
                                                <select className="form-control form-font" value={productUnit}  name="productUnit" onChange={this.handleInputQuantity} style={{backgroundColor:"#ffffff"}}>
                                                    <option selected value="Unit(s)">Unit(s)</option>
                                                    <option value="Box(es)">Box(es)</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="Liter">Liter</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>Please enter amount needed:</h2>
                                    <div>
                                        <div className="row user-input-row form-div">
                                            <div className="form-floating col-sm-3">
                                                <input type="text" className="form-control form-font"  placeholder="Product quantity here" value={productNeeded} name="productNeeded" onChange={this.handleInputQuantity} style={{backgroundColor:"#ffffff"}}/>
                                            </div>
                                            <div className="col-sm-1.2">
                                                <select className="form-control form-font" value={productUnitN}  name="productUnitN" onChange={this.handleInputQuantity} style={{backgroundColor:"#ffffff"}}>
                                                    <option selected value="Unit(s)">Unit(s)</option>
                                                    <option value="Box(es)">Box(es)</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="Liter">Liter</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1"  onClick={() => this.editName()} style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}>
                                            Previous
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()} style={{backgroundColor:"#4b1b1b", borderColor:"#ce9466", border:"solid"}}>
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1" style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}
                                                onClick={() =>this.hideQuantity()}>next
                                        </button>
                                    </div>
                                </div>
                                                   :null
                            }

                            {
                                this.state.showLink?
                                <div id="child-input-container">
                                    <h2>Please add product link suggestions: <button className="btn edit-btn" size="m"
                                                                                     onClick={this.addClick.bind(this)}>Add new suggestion
                                    </button></h2>

                                    <div>

                                        <div className="row" style={{marginLeft: "6rem"}}>
                                            <div className="form-floating col-sm-5">
                                                <label style={{color:"#ce9466"}}>
                                                    Product link  (optional)</label>

                                            </div>


                                            <ReactTooltip id="registerTip" place="top" effect="solid" class='mySepecialClass'>
                                                To get the image link: Click right button over the product image online and click on "Copy image address"
                                            </ReactTooltip>
                                            <div className="form-floating col-sm-5">
                                                <label style={{color:"#ce9466", textAlign:"start"}}>
                                                    product image link (optional)</label>
                                                <img data-tip data-for="registerTip" style={{height:"1.5rem", width:"1.5rem", borderRadius: "50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmEQb5_W_d63kRpr6DKBMx8ZPFo-M8N5y1w&usqp=CAU" alt="Italian Trulli"/>

                                            </div>
                                        </div>

                                        {/*{this.createUI()}*/}

                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1"  onClick={() => this.editAddNotes()} style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}>
                                            Previous
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()} style={{backgroundColor:"#4b1b1b", borderColor:"#ce9466", border:"solid"}}>
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideLink()} style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}>next
                                        </button>
                                    </div>
                                </div>
                                                       :null
                            }

                            {
                                this.state.showAddNotes?
                                <div id="child-input-container">
                                    <h2>Please enter any additional comments (ex. Any required health guidelines):</h2>
                                    <div>

                                            <div className="form-floating form-text-area">
                                                <textarea type="text" className="form-control form-font" placeholder="Product quantity here" value={productAddNotes} name="productAddNotes" onChange={this.handleInputQuantity} style={{backgroundColor:"#ffffff"}}/>
                                            </div>

                                    </div>

                                    <div className="wrapper">
                                        <button type="button" className="btn btn-success button1" onClick={() => this.editQuantity()} style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}>
                                            Previous
                                        </button>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()} style={{backgroundColor:"#4b1b1b", borderColor:"#ce9466", border:"solid"}}>
                                            Take me to my Grocery list
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.hideAddNotes()} style={{border:"solid", borderBlockColor:"#6b724e", borderColor:"#6b724e"}}>next
                                        </button>
                                    </div>
                                </div>
                                                       :null
                            }

                            {
                                this.state.showReview?
                                <div id="child-input-container" style={{height:"35rem"}}>
                                    <h3>Review form</h3>
                                    <div className="review-content">
                                        <div className="row">
                                            <h5>Product Name:</h5>
                                            <h6>{productName}</h6>
                                            <button  className="btn edit-btn" size="sm"
                                                     onClick={() => this.editName()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Product Quantity:</h5>
                                            <h6>{productQuantity} {productUnit}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editQuantity()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Product Quantity needed:</h5>
                                            <h6>{productNeeded} {productUnitN}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editQuantity()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Product Image:</h5>
                                            {this.state.values.map((value, index) => (
                                                <a href={value.link} target="_blank">
                                                <img style={{height:"5rem", width:"5rem", borderRadius: "50%"}} src={value.image} alt="Italian Trulli"/>
                                                </a>
                                            ))}
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editLink()}>edit
                                            </button>
                                        </div>
                                        <div className="row">
                                            <h5>Additional comments:</h5>
                                            <h6>{productAddNotes}</h6>
                                            <button className="btn edit-btn" size="sm"
                                                    onClick={() => this.editAddNotes()}>edit
                                            </button>

                                        </div>

                                    </div>
                                    <div className="wrapper" style={{marginTop:"1rem"}}>
                                        <button type="button" className="btn btn-success button1" onClick={() =>this.openModal()} style={{backgroundColor:"#4b1b1b", borderColor:"#ce9466", border:"solid"}}>
                                            Cancel Item
                                        </button>
                                        <button type="button" className="btn btn-success button1"
                                                onClick={() =>this.createItem()}>Add item
                                        </button>
                                    </div>
                                </div>
                                                       :null
                            }

                        </div>
                        <div id="index">

                            <div id="child-index">
                                <h3>Index</h3>
                                <div className="timeline">
                                    <ul>
                                        <li onClick={() => this.editName()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointName}}></div>
                                            {
                                                this.state.showCheckname?
                                            <div className="check-mark"></div>
                                                :null}
                                            Product Name
                                        </li>
                                        <li onClick={() => this.editQuantity()}>

                                            <div className="point" style={{backgroundColor:this.state. backgroundPointQuantity}}></div>
                                            {
                                                this.state.showCheckQuantity?
                                                <div className="check-mark"></div>
                                                                        :null}
                                            Quantity
                                        </li>
                                        <li onClick={() => this.editAddNotes()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointAddNotes}}></div>
                                            {
                                                this.state.showCheckAddNotes?
                                                <div className="check-mark"></div>
                                                                            :null}
                                            Additional Notes
                                        </li>
                                        <li onClick={() => this.editLink()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointLink}}></div>
                                            {
                                                this.state.showCheckLink?
                                                <div className="check-mark"></div>
                                                                            :null}
                                            Product Links
                                        </li>
                                        <li onClick={() => this.editReview()}>

                                            <div className="point" style={{backgroundColor:this.state.backgroundPointReview}}></div>
                                            {
                                                this.state.showCheckReview?
                                                <div className="check-mark"></div>
                                                                            :null}
                                            Review
                                        </li>
                                    </ul>
                                </div>
                            </div>




                    </div>
                        {/*    Pop up Congrats html*/}
                    </div>
                    {
                        this.state.showModal?
                        <div className="modal-content popup">
                            <div className="modal-header">

                                <h4 className="modal-title">Are you sure you want to go back to the Grocery List?</h4>
                            </div>
                            <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                                <p>Everything you have filled out so far in this for is going to be lost.</p>
                            </div>
                            <div className="modal-footer">
                                <Link to="/groceryList" type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeModal()}>Yes, take me to Grocery list
                                </Link>
                                <button type="button" className="btn btn-success popup-btn1"
                                        onClick={() =>this.closeModal()}>No, cancel action
                                </button>
                            </div>
                        </div>
                                            :null}



                {
                    this.state.showModal2?
                    <div className="modal-content popup">
                        <div className="modal-header">

                            <h4 className="modal-title">Congratulations!</h4>
                        </div>
                        <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                            <p>You have successfully added  new item!</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/groceryList"
                               type="button" className="btn btn-success popup-btn"
                                        onClick={() =>this.closeModal()}>Close and take me to grocery list
                                </Link>

                            <Link to="/foodPantryPortal"
                                  type="button" className="btn btn-success popup-btn"
                                  onClick={() =>this.closeModal()}>Close and take me to portal
                            </Link>
                        </div>
                    </div>
                                         :null}

                    {
                        this.state.showModal3?
                        <div className="modal-content popup">
                            <div className="modal-header">

                                <h4 className="modal-title">Are you sure you want to go back to the Food Pantry Portal?</h4>
                            </div>
                            <div className="modal-body popup-body" style={{color:"#ce9466", fontSize:"25px"}}>
                                <p>Everything you have filled out so far in this for is going to be lost.</p>
                            </div>
                            <div className="modal-footer">
                                <Link to="/foodPantryPortal" type="button" className="btn btn-success popup-btn"
                                      onClick={() =>this.closeModal3()}>Yes, take me to Portal
                                </Link>
                                <button type="button" className="btn btn-success popup-btn1"
                                        onClick={() =>this.closeModal3()}>No, cancel action
                                </button>
                            </div>
                        </div>
                                            :null}
                </div>
            </div>






        )
    }
}

