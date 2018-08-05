import React, { Component } from 'react';
import './App.css';
// Import our components
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
