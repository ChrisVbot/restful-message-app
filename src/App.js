import React, { Component } from 'react';
import MessageList from './components/MessageList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;