import React, { Component } from 'react';
import Contact from './Contact';
class Contacts extends Component {
  constructor() {
    // Calling super() method cause we are extending component
    super();
    // State
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-555'
        },
        {
          id: 2,
          name: 'Karren Williams',
          email: 'kwilliams@gmail.com',
          phone: '555-555-4444'
        },
        {
          id: 3,
          name: 'Henry Johnson',
          email: 'h.johnson@gmail.com',
          phone: '123-555-555'
        }
      ]
    };
  }
  deleteContact = id => {
    // Pull contacts from the state
    const { contacts } = this.state;
    // Search and add not equal contacts to newContacts
    const newContacts = contacts.filter(contact => contact.id !== id);
    // Update state with new contacts
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
