import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDAQvN_d7MQdlERZUdHGo6qhBoUlQReXoM",
    authDomain: "food-pantry-central-efd89.firebaseapp.com",
    databaseURL: "https://food-pantry-central-efd89-default-rtdb.firebaseio.com",
    projectId: "food-pantry-central-efd89",
    storageBucket: "food-pantry-central-efd89.appspot.com",
    messagingSenderId: "708844862891",
    appId: "1:708844862891:web:e91f03504f50feb05e66ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
