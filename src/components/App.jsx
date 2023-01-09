import css from './App.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
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
      name: '',
      number: '',
      filter: '',
    };
  }

  handleFilter = event => {
    // console.log('handle filter', this.state.contacts);
    const unfilteredArray = this.state.contacts;
    const arrayToFilter = [...unfilteredArray];

    const { value } = event.target;

    if (value.length === 0) {
      console.log('unfilteredArray:', unfilteredArray);
      this.setState({
        contacts: unfilteredArray,
      });
    } else {
      const filterItems = (arr, query) => {
        return arr.filter(el =>
          el.name.toLowerCase().includes(query.toLowerCase())
        );
      };

      const filteredContacts = filterItems(arrayToFilter, value);

      this.setState(
        {
          contacts: filteredContacts,
        },
        () => {
          console.log('filtered:', filteredContacts);
        }
      );
    }
  };

  addContact = contact => {
    // console.log('log from addContact: ', contact);
    const newContact = {
      name: contact.name,
      number: contact.number,
      id: nanoid(),
    };

    this.setState(state => ({
      contacts: [newContact, ...state.contacts],
    }));
  };

  render() {
    return (
      <div className={css.App}>
        <h1 className={css.h1}>React HW 02 Phonebook</h1>
        <h1 className={css.h1}>Phonebook</h1>
        <Form addContact={this.addContact} />
        <h2 className={css.h2}>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
