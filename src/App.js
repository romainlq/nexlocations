import React, { Component } from 'react';

import Header from './components/Header'
import Container from './components/Container'
class App extends Component {

  componentDidMount() {
    document.title = 'NexLocations'
  }
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
