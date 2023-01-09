import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  // console.log('props from list: ', contacts);
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
