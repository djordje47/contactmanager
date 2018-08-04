/**
 *  Imports react component by destructing React object and importing only
 *  Component as Component variable
 */
import React, { Component } from 'react';

/**
 * Creates new class component called Contact that extends React.Component
 * and has render method that renders User
 */

class Contact extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>Email: {this.props.email}</li>
          <li>Phone: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}
/*
 *
 * Exports newly created component so we can import it in our
 * App.js - Main component
 *  
 * */

export default Contact;
