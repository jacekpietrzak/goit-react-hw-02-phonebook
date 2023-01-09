import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const DATA = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: DATA,
      filter: '',
    };
  }

  handleFilter = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  addContact = contact => {
    const newContact = {
      name: contact.name,
      number: contact.number,
      id: nanoid(),
    };

    const checkName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (checkName !== undefined) {
      return alert(`${checkName.name} is already in contacts.`);
    }
    this.setState(state => ({
      contacts: [newContact, ...state.contacts],
    }));
  };

  removeContact = event => {
    let filteredArray = this.state.contacts.filter(
      item => item.id !== event.target.id
    );
    this.setState({ contacts: filteredArray });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <div className={css.App}>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={css.h2}>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
