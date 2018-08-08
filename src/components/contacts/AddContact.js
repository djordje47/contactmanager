import React, { Component } from 'react';
import { Consumer } from './../../context';
import TextInputGroup from './../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (this.validateInputs(name, email, phone)) {
      // Create new contact
      const newContact = {
        id: uuid(),
        name,
        email,
        phone
      };

      // Save contact
      dispatch({ type: 'ADD_CONTACT', payload: newContact });

      // Clear contact form
      this.setState({
        name: '',
        email: '',
        phone: '',
        errors: {}
      });

      this.props.history.push('/');
    }
  };

  validateInputs = (name, email, phone) => {
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return false;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return false;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Name is required' } });
      return false;
    }
    return true;
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">AddContact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
