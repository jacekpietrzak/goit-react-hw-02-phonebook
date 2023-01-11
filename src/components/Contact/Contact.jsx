import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contact, removeContact }) => {
  return (
    <li className={css.contact}>
      {contact.name}: {contact.number}
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

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default Contact;
