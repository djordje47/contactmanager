import React, { Component } from 'react';
import './App.css';
// Import our components
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-555" />
      </div>
    );
  }
}

export default App;
