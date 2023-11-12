import { H2 } from 'components/Helpers/Components.styled';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  createContact = e => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.addContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.createContact}>
        <H2>Name</H2>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <H2>Number</H2>
        <input
          type="tel"
          name="number"
          onChange={this.handleChange}
          value={this.state.number}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhonebookForm;
