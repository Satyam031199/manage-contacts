import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Form from './components/Form';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid4 from 'uuid4';

function App() {
  const localStorageKey = 'contact'
  const[contacts,setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || []
  })
  const addContact = ((contactData) => {
    setContacts([...contacts,{id: uuid4(),contactData}])
  })
  const removeContact = (id) => {
    const updatedList = contacts.filter((contact) => {
      return contact.id!==id
    })
    setContacts(updatedList)
  }
  
  useEffect(() => {
    localStorage.setItem(localStorageKey,JSON.stringify(contacts))
  },[contacts])
  return (
    <div className="App">
      <NavigationBar />
      <div className="main-container">
        <Form className="form-container" addContact={addContact}/>
      </div>
      <ContactList contacts={contacts} removeContact={removeContact}/>
    </div>
  );
}

export default App;
