/**
 *  Imports react component by destructing React object and importing only
 *  Component as Component variable
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
/**
 * Creates new class component called Contact that extends React.Component
 * and has render method that renders User
 */

class Contact extends Component {
  state = {
    showContactInfo: false
  };
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
  // Show info
  onShowClick = e => {
    if (this.state.showContactInfo) {
      e.target.innerText = 'Show';
    } else {
      e.target.innerText = 'Hide';
    }
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  // Delete contact
  onClickDelete = (id, dispatch) => {
    console.log(id);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-body p-2">
                <h4 className="card-title d-inline">{name}</h4>
                <div
                  className="btn-group float-right"
                  role="group"
                  aria-label="Basic example"
                >
                  <a
                    onClick={this.onShowClick}
                    className="btn btn-info btn-sm text-white d-block float-right"
                  >
                    Show
                  </a>
                  <a
                    onClick={this.onClickDelete.bind(this, id, dispatch)}
                    className="btn btn-danger btn-sm text-white d-block float-right"
                  >
                    Delete
                  </a>
                </div>
              </div>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

/*
 * Exports newly created component so we can import it in our
 * App.js - Main component
 *  
 * */

export default Contact;
