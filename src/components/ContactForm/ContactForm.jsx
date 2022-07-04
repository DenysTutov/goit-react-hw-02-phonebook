import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();

    // for (const contact of this.props.contacts) {
    //   if (name.toLowerCase() === contact.name.toLowerCase()) {
    //     return alert(`${name} is already in contacts`);
    //   }
    // }

    const matchName = this.props.contacts.some(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (matchName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={number}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
