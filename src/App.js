import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ShedBuilder from './ShedBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ShedBuilder/>
      </div>
    );
  }
}

export default App;
