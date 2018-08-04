import React, { Component } from 'react';
import './App.css';
// Import our components
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-555" />
        <Contact
          name="Jane Doe"
          email="jane.doe@gmail.com"
          phone="555-333-555"
        />
      </div>
    );
  }
}

export default App;
