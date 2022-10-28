import {Phonebook} from './Phonebook/Phonebook'

import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import {ContactList} from './ContactList/ContactList';
import { useEffect, useState } from 'react';


export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const getContact = localStorage.getItem('contacts');
    if (getContact) {
      return JSON.parse(getContact)
    }
    return []
  });
  
   useEffect(() => {
   localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

  // componentDidMount() {
  //   const getContact = localStorage.getItem('contacts');
  //   const parseContact = JSON.parse(getContact);
  //   if (parseContact) {
  //     this.setState({ contacts: parseContact })
  //   }
  // }

  //   componentDidUpdate(_, prevState) {
  //   if (this.state.contacts !== prevState.contacts)
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }

  const handleDeleteUser = id => {
    setContacts(contacts => {
      return  contacts.filter(item => item.id !== id) ;
    });
  };

  const handleFilteerConnect = () => {
    return contacts.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()));
}
  
  const onChangeName = (e) => {
    setFilter( e.target.value );
   
  }
  const handleSubmit = (name, number) => {
   if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
      setContacts(prevContacts => {
      return [...prevContacts, { name, number, id: nanoid() }]
      });
  };
 
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
          handleAddContact={handleSubmit}        
        />
        <h2>Contacts</h2>
        <Filter onChangeName={onChangeName} filter={filter} />
        <ContactList
          onFilterContacts={handleFilteerConnect()}
          deleteUser={handleDeleteUser}
        />


      </div>
    );
  }



