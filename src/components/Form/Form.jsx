import { Component } from 'react';
import css from './Form.module.css';

class Form extends Component {
  render() {
    return (
      <form className={css.form}>
        <section className={css.section}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </section>
        <section className={css.section}>
          <label className={css.label} htmlFor="tel">
            Number
          </label>
          <input
            className={css.input}
            id="tel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </section>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
