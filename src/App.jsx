import { AppWrapper } from './components/Helpers/Components.styled';
import PhonebookForm from './components/PhonebookForm/PhonebookForm';
import { Component } from 'react';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
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

  render() {
    return (
      <AppWrapper>
        <PhonebookForm addContact={this.addContact} />
        <PhonebookList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
      </AppWrapper>
    );
  }
}
