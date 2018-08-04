/**
 *  Imports react component by destructing React object and importing only
 *  Component as Component variable
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  onShowClick() {
    console.log('clicked');
  }
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">
            {name}
            <i onClick={this.onShowClick} className="fas fa-sort-down" />
          </h4>
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        </div>
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
