import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCA7BRYNnnVwOJ1UGe6dFrGrGPvzQ9tXPw",
    authDomain: "where-is-my-staff-62ab7.firebaseapp.com",
    databaseURL: "https://where-is-my-staff-62ab7.firebaseio.com",
    projectId: "where-is-my-staff-62ab7",
    storageBucket: "",
    messagingSenderId: "568444655866"
  };
const fbApp =  firebase.initializeApp(config);
fbApp.firestore().settings({ timestampsInSnapshots: true});

//export firestore database
export default fbApp.firestore();