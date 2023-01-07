import { Component } from 'react';
import css from './Contact.module.css';
import ContactName from '../ContactName/ContactName';
import ContactNumber from '../ContactNumber/ContactNumber';

const Contact = ({ contact }) => {
  console.log('props from contact: ', contact);
  return (
    <div className={css.contact}>
      <ContactName name={contact.name} />
      <ContactNumber number={contact.number} />
    </div>
  );
};

export default Contact;
