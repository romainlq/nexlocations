import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Container from './components/Container'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
