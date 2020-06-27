import React, { Component } from 'react';
import Layout from './Layout/index'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="Header-title"><i>ATP Top 10 Player List</i></p>
        </header>
        <Layout />
      </div>
    );
  }
}

export default App;