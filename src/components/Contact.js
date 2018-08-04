/**
 *  Imports react component by destructing React object and importing only
 *  Component as Component variable
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
/**
 * Creates new class component called Contact that extends React.Component
 * and has render method that renders User
 */

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  };

  static defaultProps = {
    name: 'Name not inserted.',
    email: 'Email not inserted.',
    phone: 'Phone not inserted.'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

/*
 * Exports newly created component so we can import it in our
 * App.js - Main component
 *  
 * */

export default Contact;
