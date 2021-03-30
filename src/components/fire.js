import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyApI0x5qZEYzwur9MAO3FXb2ncbmbjduxA",
    authDomain: "moonenwebsite.firebaseapp.com",
    databaseURL: "https://moonenwebsite-default-rtdb.firebaseio.com",
    projectId: "moonenwebsite",
    storageBucket: "moonenwebsite.appspot.com",
    messagingSenderId: "1000612330841",
    appId: "1:1000612330841:web:761a6a90bdc657d13da048",
    measurementId: "G-RFE52B3H7E"
}

const fire = firebase.firestore();
export default fire;