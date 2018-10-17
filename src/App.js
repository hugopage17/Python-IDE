import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Interpreter from './Interpreter'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Interpreter/>
      </div>
    );
  }
}

export default App;
