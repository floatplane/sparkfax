import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './firebase.js';
import Navbar from './Navbar.js';

class App extends Component {
    render() {
        return (
            <div className="container">
              <Navbar />
              <div className="starter-template">
                <h1>Bootstrap starter template</h1>
                <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
                <div className="App">
                  <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                  </div>
                  <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
                </div>
              </div>
            </div>
        );
    }
}

export default App;
