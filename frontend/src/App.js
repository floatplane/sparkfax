import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKt5x6OhqAPsrJCfnOJS76xMcuAipksDQ",
    authDomain: "sparkfax-b532e.firebaseapp.com",
    databaseURL: "https://sparkfax-b532e.firebaseio.com",
    projectId: "sparkfax-b532e",
    storageBucket: "sparkfax-b532e.appspot.com",
    messagingSenderId: "23086466549"
};
firebase.initializeApp(config);

// TODO: remove this, it's just temporary
window.firebase = firebase;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
