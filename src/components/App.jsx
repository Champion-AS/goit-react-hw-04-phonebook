import {Phonebook} from './Phonebook/Phonebook'
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';


export class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const getContact = localStorage.getItem('contacts');
    const parseContact = JSON.parse(getContact);
    if (parseContact) {
      this.setState({ contacts: parseContact })
    }
  }

    componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleDeleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

  handleFilteerConnect = () => {
    return this.state.contacts.filter(elem => elem.name.toLowerCase().includes(this.state.filter.toLowerCase()));
}
  
  onChangeName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
   
  }
  handleSubmit = (name, number) => {
   if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
      this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name, number, id: nanoid() },
        ],
        
      };
    });
  };
 


  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101',
          gap: 10,
        }}>
        <h1>Phonebook</h1>
        <Phonebook
          handleAddContact={this.handleSubmit}        
        />
        <h2>Contacts</h2>
        <Filter onChangeName={this.onChangeName} filter={this.state.filter} />
        <ContactList
          onFilterContacts={this.handleFilteerConnect()}
          deleteUser={this.handleDeleteUser}
        />


      </div>
    );
  }
}


