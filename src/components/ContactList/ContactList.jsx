import { Component } from 'react';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  console.log('props from list: ', contacts);
  return (
    <div className={css.list}>
      {contacts.map(contact => {
        return <Contact contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
