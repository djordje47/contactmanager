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
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
