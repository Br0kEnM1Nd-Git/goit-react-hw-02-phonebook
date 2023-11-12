import { AppWrapper, H1, H2 } from './components/Helpers/Components.styled';
import PhonebookForm from './components/PhonebookForm/PhonebookForm';
import { Component } from 'react';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(el => {
        return (
          el.name.toLowerCase() === newContact.name.toLowerCase() ||
          el.number === newContact.number
        );
      })
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  deleteContact = id => {
    this.setState(() => {
      return {
        contacts: this.state.contacts.filter(el => {
          if (el.id === id) {
            return false;
          }
          return true;
        }),
      };
    });
  };

  render() {
    return (
      <AppWrapper>
        <H1>Phonebook</H1>
        <PhonebookForm addContact={this.addContact} />

        <H2>Contacts</H2>
        <PhonebookFilter
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
        <PhonebookList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </AppWrapper>
    );
  }
}
