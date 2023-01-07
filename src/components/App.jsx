import css from './App.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { name: 'Jack P', id: nanoid(), number: '123-12-12' },
        { name: 'John F', id: nanoid(), number: '123-12-12' },
      ],
    };
  }
  render() {
    return (
      <div className={css.App}>
        <h1 className={css.h1}>React HW 02 Phonebook</h1>
        <Section title="Phonebook"></Section>
        <Form></Form>
        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
