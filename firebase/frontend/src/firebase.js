import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKt5x6OhqAPsrJCfnOJS76xMcuAipksDQ",
    authDomain: "sparkfax.com",
    databaseURL: "https://sparkfax-b532e.firebaseio.com",
    projectId: "sparkfax-b532e",
    storageBucket: "sparkfax-b532e.appspot.com",
    messagingSenderId: "23086466549"
};
firebase.initializeApp(config);

// TODO: remove this, it's just temporary
window.firebase = firebase;

export default firebase;
