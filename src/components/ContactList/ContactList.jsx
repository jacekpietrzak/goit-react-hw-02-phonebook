import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              removeContact={removeContact}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
