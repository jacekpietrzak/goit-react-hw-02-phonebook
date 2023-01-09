import css from './Contact.module.css';
import ContactName from '../ContactName/ContactName';
import ContactNumber from '../ContactNumber/ContactNumber';

const Contact = ({ contact, removeContact }) => {
  return (
    <li className={css.contact}>
      <ContactName name={contact.name} />
      <ContactNumber number={contact.number} />
      <button
        className={css.button}
        type="button"
        id={contact.id}
        onClick={removeContact}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
